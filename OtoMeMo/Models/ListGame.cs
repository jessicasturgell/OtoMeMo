namespace OtoMeMo.Models
{
    public class ListGame
    {
        public int Id { get; set; }
        public int ListId { get; set; }
        public List List { get; set; }
        public int GameId { get; set; }
        public Game Game { get; set; }
        public DateTime? DateStarted { get; set; }
        public DateTime? DateFinished { get; set; }
        public int? Rating { get; set; }
        public string Review { get; set; }
    }
}
