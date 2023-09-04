// @ts-check

// A function that accepts 2 callback functions, and calls them
// based on a random number

function longRunningTaskFinished(runIfSuccessful, runIfFailed) {
  const success = Math.random() > 0.5;
  if (success) {
    runIfSuccessful({ message: "Task succesful" });
  } else {
    runIfFailed({ message: "Task failed" });
  }
}

// The function to be called on success
function success(data) {
  console.log(data);
}

// The function to be called on failure
function failure(error) {
  console.error(error);
}

// Run the task in a blocking manner
longRunningTaskFinished(success, failure);

const executingLongRunningTask = new Promise(longRunningTaskFinished);

executingLongRunningTask.then(success).catch(failure);

// Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
