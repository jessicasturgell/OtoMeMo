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
                          SELECT Id, TitleEnglish, TitleRomanized, TitleCharacters, Img, [Description], Developer, Publisher, OriginalLanguage, YearReleasedOriginal, YearReleasedGlobal 
                          FROM Game";

                    var reader = cmd.ExecuteReader();

                    var games = new List<Game>();
                    while (reader.Read())
                    {
                        games.Add(new Game()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            TitleEnglish = DbUtils.GetString(reader, "TitleEnglish"),
                            TitleCharacters = DbUtils.GetString(reader, "TitleCharacters"),
                            TitleRomanized = DbUtils.GetString(reader, "TitleRomanized"),
                            Img = DbUtils.GetString(reader, "Img"),
                            Description = DbUtils.GetString(reader, "Description"),
                            Developer = DbUtils.GetString(reader, "Developer"),
                            Publisher = DbUtils.GetString(reader, "Publisher"),
                            OriginalLanguage = DbUtils.GetString(reader, "OriginalLanguage"),
                            YearReleasedOriginal = DbUtils.GetInt(reader, "YearReleasedOriginal"),
                            YearReleasedGlobal = DbUtils.GetInt(reader, "YearReleasedGlobal")
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
                          SELECT Id, TitleEnglish, TitleRomanized, TitleCharacters, Img, [Description], Developer, Publisher, OriginalLanguage, YearReleasedOriginal, YearReleasedGlobal
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
                            TitleEnglish = DbUtils.GetString(reader, "TitleEnglish"),
                            TitleCharacters = DbUtils.GetString(reader, "TitleCharacters"),
                            TitleRomanized = DbUtils.GetString(reader, "TitleRomanized"),
                            Img = DbUtils.GetString(reader, "Img"),
                            Description = DbUtils.GetString(reader, "Description"),
                            Developer = DbUtils.GetString(reader, "Developer"),
                            Publisher = DbUtils.GetString(reader, "Publisher"),
                            OriginalLanguage = DbUtils.GetString(reader, "OriginalLanguage"),
                            YearReleasedOriginal = DbUtils.GetInt(reader, "YearReleasedOriginal"),
                            YearReleasedGlobal = DbUtils.GetInt(reader, "YearReleasedGlobal")
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
                        INSERT INTO Game (Id, TitleEnglish, TitleRomanized, TitleCharacters, Img, [Description], Developer, Publisher, OriginalLanguage, YearReleasedOriginal, YearReleasedGlobal)
                        OUTPUT INSERTED.ID
                        VALUES (@TitleEnglish, @TitleRomanized, @TitleCharacters, @Img, @Description, @Developer, @Publisher, @OriginalLanguage, @YearReleasedOriginal, @YearReleasedGlobal)";

                    DbUtils.AddParameter(cmd, "@TitleEnglish", game.TitleEnglish);
                    DbUtils.AddParameter(cmd, "@TitleRomanized", game.TitleRomanized);
                    DbUtils.AddParameter(cmd, "@TitleCharacters", game.TitleCharacters);
                    DbUtils.AddParameter(cmd, "@Img", game.Img);
                    DbUtils.AddParameter(cmd, "@Description", game.Description);
                    DbUtils.AddParameter(cmd, "@Developer", game.Developer);
                    DbUtils.AddParameter(cmd, "@Publisher", game.Publisher);
                    DbUtils.AddParameter(cmd, "@OriginalLanguage", game.OriginalLanguage);
                    DbUtils.AddParameter(cmd, "@YearReleasedGlobal", game.YearReleasedGlobal);
                    DbUtils.AddParameter(cmd, "@YearReleasedOriginal", game.YearReleasedOriginal);

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
                        SET TitleEnglish = @TitleEnglish,
                            TitleRomanized = @TitleRomanized,
                            TitleCharacters = @TitleCharacters,
                            Img = @Img,
                            Description = @Description,
                            Developer = @Developer,
                            OriginalLanguage = @OriginalLanguage,
                            Publisher = @Publisher,
                            YearReleasedOriginal = @YearReleasedOriginal,
                            YearReleasedGlobal = @YearReleasedGlobal
                        WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@TitleEnglish", game.TitleEnglish);
                    DbUtils.AddParameter(cmd, "@TitleRomanized", game.TitleRomanized);
                    DbUtils.AddParameter(cmd, "@TitleCharacters", game.TitleCharacters);
                    DbUtils.AddParameter(cmd, "@Img", game.Img);
                    DbUtils.AddParameter(cmd, "@Description", game.Description);
                    DbUtils.AddParameter(cmd, "@Developer", game.Developer);
                    DbUtils.AddParameter(cmd, "@Publisher", game.Publisher);
                    DbUtils.AddParameter(cmd, "@OriginalLanguage", game.OriginalLanguage);
                    DbUtils.AddParameter(cmd, "@YearReleasedGlobal", game.YearReleasedGlobal);
                    DbUtils.AddParameter(cmd, "@YearReleasedOriginal", game.YearReleasedOriginal);

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
