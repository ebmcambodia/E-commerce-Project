using Microsoft.Extensions.Configuration;
using server.Entities;
using server.Interface.Service;
using System.Net.Http.Headers;
using System.Text.Json;

public class BakongService : IPaymentService
{
    private readonly IConfiguration _configuration;
    private readonly HttpClient _httpClient;

    public BakongService(IConfiguration configuration)
    {
        _configuration = configuration;
        _httpClient = new HttpClient();
    }

    // Initialize/create a payment
    public async Task<PaymentDetails> InitializePayment(
        int userId,
        int orderId,
        decimal amount,
        string currency = "KHR")
    {
        string token = _configuration["Bakong:Token"]; // Your token here

        // Add Authorization
        _httpClient.DefaultRequestHeaders.Authorization =
            new AuthenticationHeaderValue("Bearer", token);

        var payload = new
        {
            userId = userId,
            orderId = orderId,
            amount = amount,
            currency = currency
        };

        var response = await _httpClient.PostAsJsonAsync(
            "https://api‑bakong.nbc.kh/v1/payments", 
            payload
        );

        response.EnsureSuccessStatusCode();

        var json = await response.Content.ReadAsStringAsync();

        // Deserialize into your PaymentDetails entity
        var details = JsonSerializer.Deserialize<PaymentDetails>(json);

        return details!;
    }

    // Verify payment status
    public async Task<bool> VerifyPayment(string orderId, string paymentId)
    {
        string token = _configuration["Bakong:Token"];

        _httpClient.DefaultRequestHeaders.Authorization =
            new AuthenticationHeaderValue("Bearer", token);

        // Example GET request — will depend on Bakong API
        var response = await _httpClient.GetAsync(
            $"https://api‑bakong.nbc.kh/v1/payments/status?orderId={orderId}&paymentId={paymentId}"
        );

        if (!response.IsSuccessStatusCode)
            return false;

        var json = await response.Content.ReadAsStringAsync();
        using var doc = JsonDocument.Parse(json);

        // Poll the response JSON — adjust according to actual API schema
        bool success = doc.RootElement.GetProperty("status").GetString() == "SUCCESS";

        return success;
    }
}
