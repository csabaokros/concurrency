const ENDPOINT = "https://api.thecatapi.com/v1/breeds";
const API_KEY =
  "live_0tAweC9h1Li1MENjZBZmumSAC54WwCLqi2brE5buJAZgY0D0Zj598JmfYhoE2lYy";

const url = `${ENDPOINT}?api_key=${API_KEY}`;

try {
  // Wait for the response and assign it to a variable
  const breedsResponse = await fetch(url);
  // Wait for processing the response body, and then assign it to a variable
  const breeds = await breedsResponse.json();

  // Loop through all cat breeds, and fetch their informations
  for (const breed of breeds) {
    if (breed.image && breed.image.url) {
      const imageResponse = await fetch(breed.image.url);
      const imageData = await imageResponse.blob();
      console.log(`The photo of ${breed.name} is ${imageData.size} bytes`);
    }
  }
} catch (error) {
  console.error(error);
}

// Docs: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous
