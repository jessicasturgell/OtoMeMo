using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OtoMeMo.Models;
using OtoMeMo.Repositories;

namespace OtoMeMo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ListGameController : ControllerBase
    {
        private readonly IListGameRepository _listGameRepository;
        public ListGameController(IListGameRepository listGameRepository)
        {
            _listGameRepository = listGameRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_listGameRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var listGame = _listGameRepository.GetById(id);
            if (listGame == null)
            {
                return NotFound();
            }
            return Ok(listGame);
        }

        [HttpPost]
        public IActionResult Game(ListGame listGame)
        {
            _listGameRepository.Add(listGame);
            return CreatedAtAction("Get", new { id = listGame.Id }, listGame);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, ListGame listGame)
        {
            if (id != listGame.Id)
            {
                return BadRequest();
            }

            _listGameRepository.Update(listGame);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _listGameRepository.Delete(id);
            return NoContent();
        }
    }
}
