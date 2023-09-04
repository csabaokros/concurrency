// Construct API endpoint
const ENDPOINT = "https://api.thecatapi.com/v1/breeds";
const API_KEY =
  "live_0tAweC9h1Li1MENjZBZmumSAC54WwCLqi2brE5buJAZgY0D0Zj598JmfYhoE2lYy";

const url = `${ENDPOINT}?api_key=${API_KEY}`;

// Fetch list of all cat breeds
fetch(url)
  .then(function (response) {
    console.log("Status code: " + response.status);
    return response.json();
  })
  .then(function (responseJSON) {
    console.log(`Found ${responseJSON.length} cat breeds!`);
    console.log(`Fetching sizes of their photos:`);
    // Loop through each breed and fetch their images, if they exist
    for (const breed of responseJSON) {
      if (breed.image && breed.image.url) {
        fetch(breed.image.url)
          .then(function (imageResponse) {
            // Process the response body as raw file data
            return imageResponse.blob();
          })
          .then(function (imageData) {
            console.log(
              `The photo of ${breed.name} is ${imageData.size} bytes`
            );
          });
      }
    }
  })
  .catch(function (error) {
    console.error(error.message);
  });

// Optional reading: http://callbackhell.com/
