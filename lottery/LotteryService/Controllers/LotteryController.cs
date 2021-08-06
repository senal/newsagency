using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace LotteryService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LotteryController : ControllerBase 
    {
        public LotteryController()
        {
            
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Hello from Lottery service");

            
            
        }
    }
}