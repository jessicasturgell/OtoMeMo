using OtoMeMo.Models;
using OtoMeMo.Utils;

namespace OtoMeMo.Repositories
{
    public class ListGameRepository : BaseRepository, IListGameRepository
    {
        public ListGameRepository(IConfiguration configuration) : base(configuration) { }
        public List<ListGame> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT lg.Id, lg.ListId, lg.GameId, lg.DateStarted, lg.DateFinished, lg.Rating, lg.Review
                        FROM ListGame lg";

                    var reader = cmd.ExecuteReader();

                    var listGames = new List<ListGame>();
                    while (reader.Read())
                    {
                        listGames.Add(new ListGame()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            ListId = DbUtils.GetInt(reader, "ListId"),
                            GameId = DbUtils.GetInt(reader, "GameId"),
                            DateStarted = DbUtils.GetNullableDateTime(reader, "DateStarted"),
                            DateFinished = DbUtils.GetNullableDateTime(reader, "DateFinished"),
                            Rating = DbUtils.GetNullableInt(reader, "Rating"),
                            Review = DbUtils.GetString(reader, "Review")
                        });
                    }

                    reader.Close();

                    return listGames;
                }
            }
        }
        public ListGame GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT lg.Id, lg.ListId, lg.GameId, lg.DateStarted, lg.DateFinished, lg.Rating, lg.Review
                          FROM ListGame lg
                          WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    ListGame listGame = null;
                    if (reader.Read())
                    {
                        listGame = new ListGame()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            ListId = DbUtils.GetInt(reader, "ListId"),
                            GameId = DbUtils.GetInt(reader, "GameId"),
                            DateStarted = DbUtils.GetNullableDateTime(reader, "DateStarted"),
                            DateFinished = DbUtils.GetNullableDateTime(reader, "DateFinished"),
                            Rating = DbUtils.GetNullableInt(reader, "Rating"),
                            Review = DbUtils.GetString(reader, "Review")
                        };
                    }

                    reader.Close();

                    return listGame;
                }
            }
        }
        public void Add(ListGame listGame)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO ListGame (ListId, GameId, DateStarted, DateFinished, Rating, Review)
                        OUTPUT INSERTED.ID
                        VALUES (@ListId, @GameId, @DateStarted, @DateFinished, @Rating, @Review)";

                    DbUtils.AddParameter(cmd, "@ListId", listGame.ListId);
                    DbUtils.AddParameter(cmd, "@GameId", listGame.GameId);
                    DbUtils.AddParameter(cmd, "@DateStarted", listGame.DateStarted);
                    DbUtils.AddParameter(cmd, "@DateFinished", listGame.DateFinished);
                    DbUtils.AddParameter(cmd, "@Rating", listGame.Rating);
                    DbUtils.AddParameter(cmd, "@Review", listGame.Review);

                    listGame.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
        public void Update(ListGame listGame)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE ListGame
                        SET ListId = @ListId,
                            GameId = @GameId,
                            DateStarted = @DateStarted,
                            DateFinished = @DateFinished,
                            Rating = @Rating,
                            Review = @Review
                        WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@ListId", listGame.ListId);
                    DbUtils.AddParameter(cmd, "@GameId", listGame.GameId);
                    DbUtils.AddParameter(cmd, "@DateStarted", listGame.DateStarted);
                    DbUtils.AddParameter(cmd, "@DateFinished", listGame.DateFinished);
                    DbUtils.AddParameter(cmd, "@Rating", listGame.Rating);
                    DbUtils.AddParameter(cmd, "@Review", listGame.Review);
                    DbUtils.AddParameter(cmd, "@Id", listGame.Id);

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
                    cmd.CommandText = "DELETE FROM ListGame WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
