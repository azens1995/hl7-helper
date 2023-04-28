const adtA01Message = require("../message/adt.message");
const oruR01Message = require("../message/oru.message");
const messageType = require("../constant/messageType.constant");

function exportData(fileType, jsonData) {
  switch (fileType) {
    case messageType.ORU_R01:
      return oruR01Message(jsonData);
    case messageType.ADT_A01:
      return adtA01Message(jsonData);
    default:
      return "";
  }
}

module.exports = exportData;
