const fs = require("fs");
const convert = require("xml-js");
const AdtA01Message = require("../message/adt_ao1.message");

/**
 * Parses an XML file and returns an ADT_A01 message object.
 *
 * @param xmlFilePath - XML file path that needs to be parsed.
 * @returns an instance of the AdtA01Message class, which is created using data parsed from an XML file
 * located at the path specified by the xmlFilePath parameter.
 */
function parse(xmlFilePath) {
  if (!xmlFilePath || !fs.existsSync(xmlFilePath)) {
    throw new Error("File not found.");
  }
  const xmlData = fs.readFileSync(xmlFilePath, { encoding: "utf-8" });
  const decodedMessage = convert.xml2js(xmlData, { compact: true, spaces: 4 });
  const message = new AdtA01Message(decodedMessage.ADT_A01);
  return message;
}

module.exports = parse;
