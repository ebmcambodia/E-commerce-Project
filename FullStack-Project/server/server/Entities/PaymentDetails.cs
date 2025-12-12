
namespace server.Entities
{
    public class PaymentDetails
    {
        public int Id { get; set;}
        public int UserId { get; set; }
        public int OrderId { get; set; }
        public string BakongOrderId { get; set; }
        public string? Bakong_payment_id { get; set; }
        public string? Bakong_signature{ get; set; }
        public decimal Amount { get; set; }
        public string Status { get; set; }
    }
}