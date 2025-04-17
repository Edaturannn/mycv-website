using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using mycv_websiteAPI.Data;
using mycv_websiteAPI.Entities.Concrete;

namespace mycv_websiteAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MessagesController : ControllerBase
    {
        private readonly ILogger<MessagesController> _logger;
        private readonly Context _context;
        public MessagesController(ILogger<MessagesController> logger, Context context)
        {
            _context = context;
            _logger = logger;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var messages = await _context.Messages.ToListAsync();
            if (messages == null)
            {
                return NotFound("Mesaj bulunamadı.");
            }
            return Ok(messages);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Message message)
        {
            if (message == null)
            {
                return BadRequest("Mesaj boş olamaz.");
            }

            await _context.Messages.AddAsync(message);
            _context.SaveChanges();

            return Ok("Eklendi");
        }
    }
}
