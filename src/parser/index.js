const fs = require("fs");
const path = require("path");
const store = require("./utils/store");
const Hl7Parser = require("./utils/parser");
const exportReport = require("./utils/exportReport");
const Hl7MessageFactory = require("./factory/Hl7factory");
const { getCurrentDateInYYYYMMDD } = require("./utils/date");
const messageType = require("./constant/messageType.constant");
const { getAdtA01Keys, getOruR01Keys } = require("./factory/hl7Keys");
const basePath = path.join(__dirname, "./../../orders");
const todayDate = getCurrentDateInYYYYMMDD();

//call api to retrieve required keys and store to global state for future uses during parsing.
store.set(messageType.ADT_A01, getAdtA01Keys());
store.set(messageType.ORU_R01, getOruR01Keys());
const Hl7factory = new Hl7MessageFactory();
const sampleFilePath = `${basePath}/${todayDate}`;
const files = fs.readdirSync(sampleFilePath, { encoding: "utf-8" });
if (!files.length) {
  throw new Error("Files not found.");
}

files.forEach((file) => {
  const parser = new Hl7Parser(`${sampleFilePath}/${file}`);
  const decodedMessage = parser.parse();
  const messageHeader = decodedMessage.MSH;
  const fileType = messageHeader[9][1] + "_" + messageHeader[9][2];
  const message = Hl7factory.getMessage(fileType.toUpperCase(), decodedMessage);
  exportReport(message);
  console.log(fileType, message);
});
