using Microsoft.Extensions.Hosting;
using OtoMeMo.Models;
using OtoMeMo.Utils;

namespace OtoMeMo.Repositories
{
    public class GameRepository : BaseRepository, IGameRepository
    {
        public GameRepository(IConfiguration configuration) : base(configuration) { }

        public List<Game> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT Id, Title, Description, Developer, Publisher, YearReleased
                          FROM Game
                          ORDER BY Title";

                    var reader = cmd.ExecuteReader();

                    var games = new List<Game>();
                    while (reader.Read())
                    {
                        games.Add(new Game()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Description = DbUtils.GetString(reader, "Description"),
                            Developer = DbUtils.GetString(reader, "Developer"),
                            Publisher = DbUtils.GetString(reader, "Publisher"),
                            YearReleased = DbUtils.GetInt(reader, "YearReleased"),
                        });
                    }

                    reader.Close();

                    return games;
                }
            }
        }
        public Game GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT Id, Title, Description, Developer, Publisher, YearReleased
                          FROM Game
                          WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    Game game = null;
                    if (reader.Read())
                    {
                        game = new Game()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Description = DbUtils.GetString(reader, "Description"),
                            Developer = DbUtils.GetString(reader, "Developer"),
                            Publisher = DbUtils.GetString(reader, "Publisher"),
                            YearReleased = DbUtils.GetInt(reader, "YearReleased")
                        };
                    }

                    reader.Close();

                    return game;
                }
            }
        }
        public void Add(Game game)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Game (Title, Description, Developer, Publisher, YearReleased)
                        OUTPUT INSERTED.ID
                        VALUES (@Title, @Description, @Developer, @Publisher, @YearReleased)";

                    DbUtils.AddParameter(cmd, "@Title", game.Title);
                    DbUtils.AddParameter(cmd, "@Description", game.Description);
                    DbUtils.AddParameter(cmd, "@Developer", game.Developer);
                    DbUtils.AddParameter(cmd, "@Publisher", game.Publisher);
                    DbUtils.AddParameter(cmd, "@YearReleased", game.YearReleased);

                    game.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
        public void Update(Game game)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Game
                        SET Title = @Title,
                            Description = @Description,
                            Developer = @Developer,
                            Publisher = @Publisher,
                            YearReleased = @YearReleased
                        WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Title", game.Title);
                    DbUtils.AddParameter(cmd, "@Description", game.Description);
                    DbUtils.AddParameter(cmd, "@Developer", game.Developer);
                    DbUtils.AddParameter(cmd, "@Publisher", game.Publisher);
                    DbUtils.AddParameter(cmd, "@YearReleased", game.YearReleased);
                    DbUtils.AddParameter(cmd, "@Id", game.Id);

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
                    cmd.CommandText = "DELETE FROM Game WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
