const fs = require("fs");
//import * as fs from 'node:fs';

let text = "Hi, friend";
fs.writeFile("test.txt", text, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File written successfully");
  console.log(fs.readFileSync("test.txt", "utf8"));
});
