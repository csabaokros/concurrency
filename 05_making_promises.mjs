function longRunningTaskFinished(runIfSuccessful, runIfFailed) {
  const success = Math.random() > 0.5;
  if (success) {
    runIfSuccessful({ message: "Task succesful" });
  } else {
    runIfFailed({ message: "Task failed" });
  }
}

function success(data) {
  console.log(data);
}

function failure(error) {
  console.error(error);
}
