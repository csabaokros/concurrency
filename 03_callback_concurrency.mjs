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
