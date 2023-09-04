// Fetch a random cat from TheCatAPI and display its properties

fetch("https://api.thecatapi.com/v1/images/search")
  .then(function (response) {
    console.log("Status code: " + response.status);
    // Process the response body as JSON
    return response.json();
  })
  .then(function (responseJSON) {
    // Log the file contents
    console.log(responseJSON);
  })
  .catch(function (error) {
    // Display error message if exists
    console.error(error.message);
  })
  .finally(function () {
    // Execute code after the promise chain settled
    console.log("This is visible regardless of result");
  });

// Docs: https://developer.mozilla.org/en-US/docs/Web/API/fetch
