const fs = require("fs");
const path = require("path");

export const readDatabase = () => {
  const data = fs.readFileSync(path.join(__dirname, "data.json"));
  return JSON.parse(data);
};
