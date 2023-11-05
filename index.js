var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('a');
    res.end();
}).listen(process.env.PORT || 3000);

// Define the doGet function, which handles incoming HTTP GET requests.

function doGet(e) {
    var output; // Declare a variable to store the response data.
  
    try {
      // Retrieve the "q" query parameter from the request URL.
      var query = e.parameter["q"];
      
      // Make an HTTP GET request to the URL specified in the "q" parameter.
      var response = UrlFetchApp.fetch(decodeURIComponent(query));
      
      // Create a success response with "result" set to "success" and "response" containing the fetched JSON data.
      output = {"result": "success", "response": JSON.parse(response.getContentText())};
    }
    catch(e) {
      // Handle any exceptions (errors) that occurred during the try block.
      
      // Create an error response with "result" set to "error" and an "error" message.
      output = {"result": "error", "error": "Unable to fetch"};
    }
    
    // Create a JSON response from the output object and set the MIME type to JSON.
    return ContentService.createTextOutput(JSON.stringify(output)).setMimeType(ContentService.MimeType.JSON);
  }