﻿namespace OtoMeMo.Models
{
    public class List
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public string Name { get; set; }
    }
}
