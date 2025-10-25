using OtoMeMo.Models;

namespace OtoMeMo.Repositories
{
    public interface IUserRepository
    {
        List<User> GetAll();
        User GetById(int id);
        User GetUserByDisplayName(string displayName);
        void Add (User user);
        void Update (User user);
        void Delete (int id);
    }
}