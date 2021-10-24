using System.Net;
using System.Net.Http.Json;
using System.Text.Json;
using System.Threading.Tasks;
using FluentAssertions;
using Transfer.Contact;
using Xunit;
using Xunit.Abstractions;

namespace DusanMalusev.Tests.Controllers.Integration
{
    public class ContactControllerTest : IClassFixture<Application>
    {
        private readonly Application _application;

        public ContactControllerTest(Application application, ITestOutputHelper output)
        {
            _application = application;
            _application.Output = output;
        }

        [Fact]
        public async Task Should_Create_New_Contact()
        {
            using var client = await _application.CreateCsrfClientAsync();

            var request = new CreateContact.Request
            {
                Email = "test@test.com",
                Message = "Hello World Message",
                Name = "Dusan Malusev",
                Subject = "Test Message Subject"
            };

            var response = await client.PostAsJsonAsync("/api/contact/new", request);

            response.StatusCode
                .Should()
                .Be(HttpStatusCode.Created);

            var data = await JsonSerializer.DeserializeAsync<CreateContact.Response>(
                await response.Content.ReadAsStreamAsync()
            );

            data.Should().NotBeNull();
            data!.Id.Should().BePositive();
            data.Name.Should().Be(request.Name);
            data.Email.Should().Be(request.Email);
            data.Subject.Should().Be(request.Subject);
            data.Message.Should().Be(request.Message);
        }
    }
}