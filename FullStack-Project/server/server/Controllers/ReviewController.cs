using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using server.Dto;
using server.Entities;
using server.Interface.Service;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewService reviewService;

        public ReviewController(IReviewService reviewService)
        {
            this.reviewService = reviewService;
        }

        [HttpGet("{productId}")]
        public async Task<ActionResult<IEnumerable<ProductReview>>> GetReviews(int productId)
        {
            //string? email = User?.Identity?.Name;
            // if (!Int32.TryParse(User.FindFirst("UserId")?.Value, out int userId))
            // {
            //     return Unauthorized();
            // }

            return Ok(await reviewService.GetReviews(productId));
        }
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<ProductReview>> CreateReviw([FromBody] ReviewDTO req){
            if (!Int32.TryParse(User.FindFirst("UserId")?.Value, out int userId))
            {
                return Unauthorized();
            }
            var res = await reviewService.CreateReview(req,userId);
            return Ok(res);
        }
    }
}