const path = require("path");
const store = require("./utils/store");
const Hl7Parser = require("./utils/parser");
const exportReport = require("./utils/exportReport");
const Hl7MessageFactory = require("./factory/Hl7factory");
const { getCurrentDateInYYYYMMDD } = require("./utils/date");
const messageType = require("./constant/messageType.constant");
const { getFilesFromDir } = require("./utils/file");
const { getAdtA01Keys, getOruR01Keys } = require("./factory/hl7Keys");
const Hl7FilesPath = path.join(
  __dirname,
  "./../../orders",
  getCurrentDateInYYYYMMDD()
);
const files = getFilesFromDir(Hl7FilesPath);

//call api to retrieve required keys and store to global state for future uses during parsing.
store.set(messageType.ADT_A01, getAdtA01Keys());
store.set(messageType.ORU_R01, getOruR01Keys());
const Hl7factory = new Hl7MessageFactory();

for (const file of files) {
  const parser = new Hl7Parser(`${Hl7FilesPath}/${file}`);
  const decodedMessage = parser.parse();
  const messageHeader = decodedMessage.MSH;
  const fileType = messageHeader[9][1] + "_" + messageHeader[9][2];
  const message = Hl7factory.getMessage(fileType.toUpperCase(), decodedMessage);
  exportReport(message);
  console.log(fileType, message);
}
