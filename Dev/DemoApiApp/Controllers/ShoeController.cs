using DemoApiApp.Data;
using DemoApiApp.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace DemoApiApp.Controller
{


    //api/Shoe

    [Route("api/[controller]")]
    [ApiController]
    public class ShoeController : ControllerBase
    {
        private readonly IShoeRepo _repo;

        public ShoeController(IShoeRepo repo)
        {
            _repo = repo;
        }


        [HttpGet]
        public ActionResult<IEnumerable<Shoe>> GetAllShoes()
        {
            var shoeItems = _repo.GetShoes();
            return Ok(shoeItems);
        }

        [HttpGet("{id}")]
        public ActionResult<Shoe> GetShoeById(int id)
        {
            var shoe = _repo.GetShoeById(id);
            return Ok(shoe);
        }


    }
}