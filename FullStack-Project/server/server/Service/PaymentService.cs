using System.Net.Http.Headers;
using System.Text.Json;
using server.Entities;
using server.Enum;
using server.Interface.Repository;
using server.Interface.Service;

public class PaymentService : IPaymentService
{
    private readonly IConfiguration _config;
    private readonly IPaymentDetailRepository _paymentDetailRepository;
    private readonly HttpClient _httpClient;

    public PaymentService(
        IConfiguration config,
        IPaymentDetailRepository paymentDetailRepository)
    {
        _config = config;
        _paymentDetailRepository = paymentDetailRepository;
        _httpClient = new HttpClient();
    }

    // 1. Initialize Payment (Generate QR data or payment request)
    public async Task<PaymentDetails> InitializePayment(
        int userId, int orderId, decimal amount, string currency = "KHR")
    {
        // 1) Get the token from config (for testing) or generate dynamically
        string token = _config["Bakong:Token"];

        // 2) Add Authorization
        _httpClient.DefaultRequestHeaders.Authorization =
            new AuthenticationHeaderValue("Bearer", token);

        // 3) Create the payment payload for Bakong
        var payload = new
        {
            amount = amount,
            currency = currency,
            reference = $"ORDER_{orderId}",
            description = $"Payment for Order {orderId}"
        };

        // 4) Call Bakong API endpoint to create a payment
        var response = await _httpClient.PostAsJsonAsync(
            "https://api-bakong.nbc.kh/v1/payments", payload
        );

        response.EnsureSuccessStatusCode();

        var json = await response.Content.ReadAsStringAsync();
        var doc = JsonDocument.Parse(json);

        // Assume the API returns paymentId / transactionId / QR
        string paymentId = doc.RootElement.GetProperty("paymentId").GetString();
        string qrString = doc.RootElement.TryGetProperty("qrString", out var qr)
                          ? qr.GetString() : null;

        // 5) Save to database
#pragma warning disable CS8601 // Possible null reference assignment.

        var payment = await _paymentDetailRepository.AddAsync(new PaymentDetails()
        {
            UserId = userId,
            OrderId = orderId,
            Amount = amount,
            BakongOrderId = paymentId,
            QRData = qrString,
            Status = PaymentStatus.Pending.ToString()
        });
#pragma warning restore CS8601 // Possible null reference assignment.


        return payment;
    }

    public async Task<bool> VerifyPayment(string orderId, string paymentId, string? signature = null)
    {
        // get token
        string token = _config["Bakong:Token"];

        _httpClient.DefaultRequestHeaders.Authorization =
            new AuthenticationHeaderValue("Bearer", token);

        // Call status endpoint
        var response = await _httpClient.GetAsync(
            $"https://api-bakong.nbc.kh/v1/payments/status?orderId={orderId}&paymentId={paymentId}"
        );

        if (!response.IsSuccessStatusCode)
            return false;

        var json = await response.Content.ReadAsStringAsync();
        var doc = JsonDocument.Parse(json);

        string status = doc.RootElement.GetProperty("status").GetString();

        var payment = await _paymentDetailRepository
            .GetPaymentDetailsByRPId(orderId)
            ?? throw new Exception("Payment not found");

        payment.Bakong_payment_id = paymentId;

        if (status == "SUCCESS")
            payment.Status = PaymentStatus.Completed.ToString();
        else
            payment.Status = PaymentStatus.Failed.ToString();

        await _paymentDetailRepository.UpdateAsync(payment);

        return status == "SUCCESS";
    }

}
