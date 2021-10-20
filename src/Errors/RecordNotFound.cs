namespace Errors;

public class RecordNotFound : Exception
{
    public RecordNotFound()
        : base("Record is not found in database")
    {
        
    }
}