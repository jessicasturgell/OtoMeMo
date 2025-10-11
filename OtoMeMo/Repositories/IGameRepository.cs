using OtoMeMo.Models;

namespace OtoMeMo.Repositories
{
    public interface IGameRepository
    {
        List<Game> GetAll();
        Game GetById(int id);
        void Add (Game game);
        void Update (Game game);
        void Delete (int id);
    }
}