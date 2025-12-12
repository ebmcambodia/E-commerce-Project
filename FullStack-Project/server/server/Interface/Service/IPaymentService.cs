using server.Entities;

namespace server.Interface.Service
{
    public interface IPaymentService
    {
        Task<PaymentDetails> InitializePayment(int userId,int orderId,decimal amount,string currency="KHR");
        Task<bool> VerifyPayment(string orderId, string paymentId,String? signature=null);
         

      

    }
}