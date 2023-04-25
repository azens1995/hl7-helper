const fs = require("fs");

const base64String = () => {
  const string = fs.readFileSync("src/generator/utils/sample_file.pdf", {
    encoding: "base64",
  });

  return string;
};

module.exports = { base64String };
