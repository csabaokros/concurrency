// @ts-check

const ENDPOINT = "https://api.thecatapi.com/v1/breeds";
const API_KEY =
  "live_0tAweC9h1Li1MENjZBZmumSAC54WwCLqi2brE5buJAZgY0D0Zj598JmfYhoE2lYy";

const url = `${ENDPOINT}?api_key=${API_KEY}`;

async function fetchJSON(url) {
  try {
    const breedsResponse = await fetch(url);
    return breedsResponse.json();
  } catch (error) {
    throw new Error(error);
  }
}

async function fetchImageSize(url) {
  try {
    const imageResponse = await fetch(url);
    const imageData = await imageResponse.blob();
    return imageData.size;
  } catch (error) {
    throw new Error(error);
  }
}
