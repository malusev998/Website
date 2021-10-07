namespace Serializers.Contracts
{
    public interface ITicketDeserializer<T>
    {
        public T Deserialize(byte[] data);

        public ValueTask<T> DeserializeAsync(Stream data, CancellationToken cancellationToken = default);
    }
}