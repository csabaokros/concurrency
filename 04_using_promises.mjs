fetch("https://api.thecatapi.com/v1/images/search")
  .then(function (response) {
    console.log("Status code: " + response.status);
    return response.json();
  })
  .then(function (responseJSON) {
    console.log(responseJSON);
  })
  .catch(function (error) {
    console.error(error.message);
  })
  .finally(function () {
    console.log("This is visible regardless of result");
  });
