const fs = require("fs");
const { generateRandomNumber } = require("./random");

/**
 * Exports observation data as PDF reports to a specific folder depending on the message type.
 *
 * @param {object} message - contains information about a message.
 */
async function exportReport(message, fileName) {
  if (!message) {
    return;
  }
  const { observationData } = message;
  if (!observationData) {
    return;
  }

  for (const observation of observationData) {
    const folderName = `reports/${fileName}`;
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
    const { data: base64PDF, typeOfData } = observation;

    try {
      fs.writeFileSync(
        `${folderName}/${new Date().getTime()}_${generateRandomNumber(
          1,
          100
        )}.${typeOfData}`,
        base64PDF,
        "base64"
      );
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = exportReport;
