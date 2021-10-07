namespace Serializers.Contracts
{
    public interface ITicketSerializer<in T>
    {
        public byte[] Serialize(T model);

        public Task SerializeAsync(Stream stream, T model, CancellationToken cancelationToken = default);
    }
}