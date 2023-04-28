const fs = require("fs");
const path = require("path");
const Hl7Parser = require("./parser");
const exportData = require("./exportData");

function reportExtraction() {
  const sampleFilePath = path.join(
    __dirname,
    "./../../../Hl7Samples/ORU_LAB.txt"
  );
  const parser = new Hl7Parser(sampleFilePath);
  const decodedMessage = parser.parse();
  const messageType = decodedMessage.MSH[9][1] + "_" + decodedMessage.MSH[9][2];
  const { observation } = exportData(messageType.toUpperCase(), decodedMessage);
  observation.forEach(({ data: base64Encoded }, index) => {
    const folderName = "reports/ORU_LAB";
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
    fs.writeFileSync(
      `${folderName}/${new Date().getTime()}_${index + 1}.pdf`,
      base64Encoded,
      "base64"
    );
  });
}
module.exports = reportExtraction;
