const fs = require("fs");
const { generateRandomNumber } = require("./random");

async function exportReport(message) {
  if (!message) {
    return;
  }
  const { observationData, messageType: mshType } = message;
  if (!observationData) {
    return;
  }

  for (const observation of observationData) {
    const folderName = `reports/${mshType}`;
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
    const { data: base64PDF } = observation;

    try {
      fs.writeFileSync(
        `${folderName}/${new Date().getTime()}_${generateRandomNumber(
          1,
          100
        )}.pdf`,
        base64PDF,
        "base64"
      );
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = exportReport;
