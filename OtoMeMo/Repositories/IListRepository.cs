using OtoMeMo.Models;

namespace OtoMeMo.Repositories
{
    public interface IListRepository
    {
        void Add(List list);
        void Delete(int id);
        List<List> GetAll();
        List GetById(int id);
        void Update(List list);
    }
}