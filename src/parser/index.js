const fs = require("fs");
const path = require("path");
const store = require("./utils/store");
const Hl7Parser = require("./utils/parser");
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

const path1 = path.join(__dirname, "./../../cover-page/coverpage.txt");
const base64CoverPagePdf = fs.readFileSync(path1, "utf-8");

//call api to retrieve required keys and store to global state for future uses during parsing.
store.set(messageType.ADT_A01, getAdtA01Keys());
store.set(messageType.ORU_R01, getOruR01Keys());
const Hl7factory = new Hl7MessageFactory();
const files = fs.readdirSync(Hl7FilesPath, { encoding: "utf-8" });
if (!files.length) {
  throw new Error("Files not found.");
}

const reports = [];

for (const file of files) {
  const parser = new Hl7Parser(`${Hl7FilesPath}/${file}`);
  const decodedMessage = parser.parse();
  const messageHeader = decodedMessage.MSH;
  const fileType = messageHeader[9][1] + "_" + messageHeader[9][2];
  const message = Hl7factory.getMessage(fileType.toUpperCase(), decodedMessage);
  reports.push(exportReport(message, base64CoverPagePdf));
  console.log(fileType, message);
}

Promise.all(reports).then(() => {
  console.log("Reports are generated SuccessFully........");
});
