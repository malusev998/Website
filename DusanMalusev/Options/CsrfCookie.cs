namespace DusanMalusev.Options
{
    public class CsrfCookie
    {
        public string Name { get; set; }

        public string Domain { get; set; }

        public bool Secure { get; set; }

        public int ExpireIn { get; set; }

        public string Path { get; set; }
    }
}
