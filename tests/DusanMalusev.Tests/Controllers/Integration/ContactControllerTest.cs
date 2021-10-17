using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Json;
using System.Text.Json;
using System.Threading.Tasks;
using FluentAssertions;
using Transfer.Contact;
using Xunit;

namespace DusanMalusev.Tests.Controllers.Integration
{
    public class ContactControllerTest : IClassFixture<Application>, IDisposable
    {
        private readonly Application _application;
        private readonly HttpClient _client;

        public ContactControllerTest(Application application)
        {
            _application = application;
            _client = _application.CreateClient();
        }

        [Fact]
        public async Task Should_Create_New_Contact()
        {

            var request = new CreateContact.Request
            {
                Email = "malusevd99@gmail.com",
                Message = "Hello World Message",
                Name = "Dusan Malusev",
                Subject = "Test Message Subject"
            };

            var response = await _client.PostAsJsonAsync("/api/contact/new", request);

            response.StatusCode
                .Should()
                .Be(HttpStatusCode.Created);

            var stream = await response.Content.ReadAsStreamAsync();
            var data = await JsonSerializer.DeserializeAsync<CreateContact.Response>(stream);

            data.Should().NotBeNull();
            data!.Id.Should().BePositive();
            data.Name.Should().Be(request.Name);
            data.Email.Should().Be(request.Email);
            data.Subject.Should().Be(request.Subject);
            data.Message.Should().Be(request.Message);
        }

        public void Dispose()
        {
            _application.Dispose();
            _client.Dispose();
            GC.SuppressFinalize(this);
        }
    }
}
