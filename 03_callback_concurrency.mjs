import fs from "node:fs";

function processCSV(data) {
  let lines = [];
  const rows = data.split("\n");
  for (const column of rows) {
    const separated = column.split(";");
    lines.push(separated);
  }
  return lines;
}

// Assign the callback function to a variable
const readFileCallback = (error, data) => {
  if (error) {
    console.error(error.message);
  } else {
    console.log(processCSV(data));
  }
};

// Read two different files, and pass their contents to the same function
console.log("sample.data.csv");
fs.readFile("./data/sample.data.csv", { encoding: "utf-8" }, readFileCallback);

console.log("sample-2.data.csv");
fs.readFile(
  "./data/sample-2.data.csv",
  { encoding: "utf-8" },
  readFileCallback
);
