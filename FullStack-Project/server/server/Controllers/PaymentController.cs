using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using server.Dto;
using server.Interface.Service;
using server.Service;

[Route("api/[controller]")]
[ApiController]
public class PaymentController : ControllerBase
{
    private readonly IPaymentService _bakongService;

    public PaymentController(IPaymentService bakongService)
    {
        _bakongService = bakongService;
    }

    // // Endpoint to create Razorpay order
    // [HttpPost("create-order")]
    // public IActionResult CreateOrder([FromBody] decimal amount)
    // {
    //     var order = _razorpayService.CreateOrder(amount);
    //     return Ok(new { orderId = order.OrderId, amount = order.Amount, currency = order.Currency });
    // }

    // Endpoint to verify Razorpay payment
    // [HttpPost("verify-payment")]
    // public IActionResult VerifyPayment([FromBody] PaymentVerificationRequest verificationRequest)
    // {
    //     var isVerified = _razorpayService.VerifyPaymentSignature(
    //         verificationRequest.OrderId,
    //         verificationRequest.PaymentId,
    //         verificationRequest.Signature
    //     );

    //     return isVerified ? Ok("Payment verified successfully") : BadRequest("Payment verification failed");
    // }

    [HttpPost("update-payment")]
    public async Task<IActionResult> UpdatePayment([FromBody] PaymentVerificationRequest verificationRequest)
    {
         bool isVerified = await _bakongService.VerifyPayment(
        verificationRequest.OrderId,
        verificationRequest.PaymentId
    );  
        ResponseDto res=new ResponseDto();

        if(isVerified)
        return Ok(res.Success("Payment verified successfully"));
        else
        return BadRequest(res.Failure("Payment verification failed"));
       

    }
}

public class PaymentVerificationRequest
{
    public string OrderId { get; set; }
    public string PaymentId { get; set; }
    public string? Signature { get; set; }

}
