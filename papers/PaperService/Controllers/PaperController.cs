using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;


namespace PaperService.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class PaperController : ControllerBase
    {
        public PaperController()
        {
         

        }


        [HttpGet]
        public IActionResult Get()
        {
             return Ok("This is the Paper controller");   



        }        
    }
    
}