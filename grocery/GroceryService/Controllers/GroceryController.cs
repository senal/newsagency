using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace GroceryService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GroceryController : ControllerBase
    {
        public GroceryController()
        {
            
        }


        [HttpGet]
        public IActionResult Get()
        {

            return Ok("Hello this is Grocery controller");
            


        }
    }
    
}