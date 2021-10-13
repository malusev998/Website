namespace Errors
{
    public class RedisError : Exception
    {
        public RedisError(string message)
            : base(message)
        {
        }
    }
}