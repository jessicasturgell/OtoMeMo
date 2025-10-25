using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OtoMeMo.Models;
using OtoMeMo.Repositories;

namespace OtoMeMo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ListController : ControllerBase
    {
        private readonly IListRepository _listRepository;
        public ListController(IListRepository listRepository)
        {
            _listRepository = listRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_listRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var list = _listRepository.GetById(id);
            if (list == null)
            {
                return NotFound();
            }
            return Ok(list);
        }

        [HttpPost]
        public IActionResult Post(List list)
        {
            _listRepository.Add(list);
            return CreatedAtAction("Get", new { id = list.Id }, list);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, List list)
        {
            if (id != list.Id)
            {
                return BadRequest();
            }

            _listRepository.Update(list);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _listRepository.Delete(id);
            return NoContent();
        }
    }
}
