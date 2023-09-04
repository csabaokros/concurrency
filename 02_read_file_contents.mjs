import fs from "node:fs";

// Split file contents on each new line
// then split each line on ; character
function processCSV(data) {
  let lines = [];
  const rows = data.split("\n");
  for (const column of rows) {
    const separated = column.split(";");
    lines.push(separated);
  }
  return lines;
}

// Read file contents, then pass them to the callback function
fs.readFile("./data/sample.data.csv", { encoding: "utf-8" }, (error, data) => {
  // Process the text content, and log it as an array
  if (error) {
    console.error(error.message);
  } else {
    console.log(processCSV(data));
  }
});

// Docs: https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#filehandlereadfileoptions

// Deepdive:
// https://blog.logrocket.com/complete-guide-node-js-event-loop/
// https://www.codingninjas.com/studio/library/blocking-and-non-blocking-in-node-js
