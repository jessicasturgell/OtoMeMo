using OtoMeMo.Models;

namespace OtoMeMo.Repositories
{
    public interface IListGameRepository
    {
        void Add(ListGame listGame);
        void Delete(int id);
        List<ListGame> GetAll();
        ListGame GetById(int id);
        void Update(ListGame listGame);
    }
}