const AdtA01Message = require("../message/adt_a01.message");
const OruR01Message = require("../message/oru_r01.message");
const messageType = require("../constant/messageType.constant");

class Hl7MessageFactory {
  getMessage(fileType) {
    switch (fileType) {
      case messageType.ORU_R01:
        return new OruR01Message();
      case messageType.ADT_A01:
        return new AdtA01Message();
      default:
        return "";
    }
  }
}

module.exports = Hl7MessageFactory;
