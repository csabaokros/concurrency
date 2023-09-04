// @ts-check

const ENDPOINT = "https://api.thecatapi.com/v1/breeds";
const API_KEY =
  "live_0tAweC9h1Li1MENjZBZmumSAC54WwCLqi2brE5buJAZgY0D0Zj598JmfYhoE2lYy";

const url = `${ENDPOINT}?api_key=${API_KEY}`;

// Fetch endpoint data as JSON
async function fetchJSON(url) {
  try {
    const breedsResponse = await fetch(url);
    return breedsResponse.json();
  } catch (error) {
    throw new Error(error);
  }
}

// Fetch an image and return it's file size
async function fetchImageSize(url) {
  try {
    const imageResponse = await fetch(url);
    const imageData = await imageResponse.blob();
    return imageData.size;
  } catch (error) {
    throw new Error(error);
  }
}

try {
  const breeds = await fetchJSON(url);
  console.log(`Fetched ${breeds.length} cat breeds!`);
  for (const breed of breeds) {
    if (breed.image && breed.image.url) {
      const size = await fetchImageSize(breed.image.url);
      console.log(`The photo of ${breed.name} is ${size} bytes`);
    }
  }
} catch (error) {
  console.error(error.message);
}

// Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
