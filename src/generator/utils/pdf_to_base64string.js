const fs = require("fs");

// TODO: Fetch file from s3 bucket
// For now, sample file (dummy file) is used.
const base64String = () => {
  const string = fs.readFileSync("reports/sample_file.pdf", {
    encoding: "base64",
  });

  return string;
};

module.exports = { base64String };
