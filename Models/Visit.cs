namespace Models
{
    public enum VisitProvider
    {
        Github
    }
    public class Visit
    {
        public int Id { get; set; }
        
        public VisitProvider Provider { get; set; }
        
        public string Email { get; set; }
        
        public string UserName { get; set; }
        
        public int Count { get; set; } = 0;
    }
}