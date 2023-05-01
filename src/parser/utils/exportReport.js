const fs = require("fs");
const Hl7MessageFactory = require("../factory/Hl7factory");
const messageType = require("../constant/messageType.constant");

function exportReport() {
  const Hl7factory = new Hl7MessageFactory();
  const {
    observation,
    messageHeader: { messageType: mshType },
  } = Hl7factory.getMessage(messageType.ORU_R01);
  observation.forEach(({ data: base64Encoded }, index) => {
    const folderName = `reports/${mshType}`;
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
module.exports = exportReport;
