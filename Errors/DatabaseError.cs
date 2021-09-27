namespace Errors;

public struct DatabaseError
{
    public string Message { get; set; }
    
    public DatabaseError(string message)
    {
        Message = message;
    }
}
