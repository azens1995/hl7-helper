const fs = require("fs");
const { getCurrentDateInYYYYMMDD } = require("../utils/date");

function exportReport(message) {
  const { observationData, messageType: mshType } = message;
  if (!observationData) {
    return;
  }
  observationData.forEach(({ data: base64Encoded }, index) => {
    const folderName = `reports/${mshType}-${getCurrentDateInYYYYMMDD()}`;
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
