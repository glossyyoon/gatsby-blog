using System;
using System.Net.Http;
using System.Threading.Tasks;


using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;

using Newtonsoft.Json;

namespace api
{
    public static class CmsHttpTrigger
    {
        [FunctionName("CmsHttpTrigger")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = "posts")] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");
            var blogUri = Environment.GetEnvironmentVariable("BLOG_URI");

            var requestUri = $"https://public-api.wordpress.com/rest/v1.1/sites/{blogUri}/posts/";
            var response = default(Models.PostCollection);

            using (var http = new HttpClient())
            {
                var serialised = await http.GetStringAsync(requestUri);
                response = JsonConvert.DeserializeObject<Models.PostCollection>(serialised);

            }

            return new OkObjectResult(response);
        }
    }
}