const fs = require("fs");
const hl7v2 = require("@redoxengine/redox-hl7-v2");

const parseHL7 = (filePath) => {
  const data = fs.readFileSync(filePath, "utf-8");

  const parser = new hl7v2.Parser();
  parsedMessage = parser.parse(data);

  return parsedMessage;
};

module.exports = { parseHL7 };
