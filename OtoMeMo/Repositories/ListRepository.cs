using OtoMeMo.Models;
using OtoMeMo.Utils;

namespace OtoMeMo.Repositories
{
    public class ListRepository : BaseRepository, IListRepository
    {
        public ListRepository(IConfiguration configuration) : base(configuration) { }
        public List<List> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT Id, UserId, [Name]
                          FROM List";

                    var reader = cmd.ExecuteReader();

                    var lists = new List<List>();
                    while (reader.Read())
                    {
                        lists.Add(new List()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            UserId = DbUtils.GetInt(reader, "UserId"),
                            Name = DbUtils.GetString(reader, "Name")
                        });
                    }

                    reader.Close();

                    return lists;
                }
            }
        }
        public List GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT Id, UserId, [Name]
                          FROM List
                          WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    List list = null;
                    if (reader.Read())
                    {
                        list = new List()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            UserId = DbUtils.GetInt(reader, "UserId"),
                            Name = DbUtils.GetString(reader, "Name")
                        };
                    }

                    reader.Close();

                    return list;
                }
            }
        }
        public void Add(List list)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO List (UserId, [Name])
                        OUTPUT INSERTED.ID
                        VALUES (@UserId, @Name)";

                    DbUtils.AddParameter(cmd, "@UserId", list.UserId);
                    DbUtils.AddParameter(cmd, "@Name", list.Name);

                    list.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
        public void Update(List list)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE List
                        SET UserId = @UserId,
                            [Name] = @Name
                        WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@UserId", list.UserId);
                    DbUtils.AddParameter(cmd, "@Name", list.Name);
                    DbUtils.AddParameter(cmd, "@Id", list.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM List WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
