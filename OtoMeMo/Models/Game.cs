namespace OtoMeMo.Models
{
    public class Game
    {
        public int Id { get; set; }
        public string TitleEnglish { get; set; }
        public string TitleRomanized { get; set; }
        public string TitleCharacters { get; set; }
        public string Img { get; set; }
        public string Description { get; set; }
        public string Developer { get; set; }
        public string Publisher { get; set; }
        public string OriginalLanguage { get; set; }
        public int YearReleasedOriginal { get; set; }
        public int YearReleasedGlobal { get; set; }
    }
}
