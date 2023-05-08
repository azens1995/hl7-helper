const AdtA01Message = require("../message/adt_a01.message");
const OruR01Message = require("../message/oru_r01.message");
const messageType = require("../constant/messageType.constant");

/**
 * The Hl7MessageFactory class creates different types of HL7 messages based on the specified file type.
 *
 * @param {string} fileType - The `fileType` parameter is a string that specifies the type of file.
 * @param {object} jsonData - The `jsonData` parameter is an object that contains information about
 * a message.
 */
class Hl7MessageFactory {
  getMessage(fileType, jsonData) {
    switch (fileType) {
      case messageType.ORU_R01:
        return new OruR01Message(jsonData);
      case messageType.ADT_A01:
        return new AdtA01Message(jsonData);
      default:
        return "";
    }
  }
}

module.exports = Hl7MessageFactory;
