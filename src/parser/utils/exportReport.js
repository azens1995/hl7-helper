const fs = require("fs");
const { mergeFiles } = require("./file");
const { generateRandomNumber } = require("./random");

async function exportReport(message, coverPage) {
  if (!message || !coverPage) {
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
    const mergedBase64PDF = await mergeFiles(coverPage, base64PDF);

    try {
      fs.writeFileSync(
        `${folderName}/${new Date().getTime()}_${generateRandomNumber(
          1,
          100
        )}.pdf`,
        mergedBase64PDF,
        "base64"
      );
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = exportReport;
