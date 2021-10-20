namespace Errors;

public class RecordAlreadyExits : Exception
{
    public RecordAlreadyExits()
        : base("Record already exists in database")
    {
    }
}