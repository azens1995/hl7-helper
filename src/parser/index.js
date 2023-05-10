const path = require("path");
const store = require("./utils/store");
const Hl7Parser = require("./utils/parser");
const { getFilesFromDir } = require("./utils/file");
const exportReport = require("./utils/exportReport");
const Hl7MessageFactory = require("./factory/Hl7factory");
const { getCurrentDateInYYYYMMDD } = require("./utils/date");
const messageType = require("./constant/messageType.constant");
const { getAdtA01Keys, getOruR01Keys } = require("./factory/hl7Keys");
const Hl7FilesPath = path.join(
  __dirname,
  "./../../orders",
  getCurrentDateInYYYYMMDD()
);
const files = getFilesFromDir(Hl7FilesPath);

/**
 * The `store` object is used to store key-value pairs that can be accessed from anywhere in the code.
 * This is an API mocking to retrieve required fields for each type of message. The `getAdtA01Keys()` and
 * `getOruR01Keys()` functions are used to retrieve the required fields for ADT_A01 and ORU_R01 messages
 * respectively.
 */
//TODO: Call actual api to retrieve required keys and store to global state for future uses during parsing.
store.set(messageType.ADT_A01, getAdtA01Keys());
store.set(messageType.ORU_R01, getOruR01Keys());
const Hl7factory = new Hl7MessageFactory();

/**
 * This code block is iterating through an array of Hl7 files obtained from a orders directory path. For each
 * file, it creates a new instance of `Hl7Parser` with the file path, parses the HL7 message, extracts
 * the message header, determines the message type based on the value in the 9th field of the message
 * header(refer: https://hl7-definition.caristix.com/v2/HL7v2.7/Segments/MSH), creates a new message object
 * using `Hl7factory.getMessage()` method, exports a report using`exportReport()` function. The reason for iterating
 * through the files is to support batch parsing of HL7 messages.
 */
for (const file of files) {
  const fileInfo = file.split(".");
  if (fileInfo.pop() !== "txt") {
    continue;
  }
  const filePath = path.join(Hl7FilesPath, file);
  const parser = new Hl7Parser(filePath);
  const decodedMessage = parser.parse();
  const messageHeader = decodedMessage.MSH;
  const fileType = messageHeader[9][1] + "_" + messageHeader[9][2];
  const message = Hl7factory.getMessage(fileType.toUpperCase(), decodedMessage);
  exportReport(message, fileInfo[0]);
  console.log(fileType, message);
}
