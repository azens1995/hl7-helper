const {
  FULL_NAME,
  DOB,
  PHONE_NUMBER,
  EMAIL,
  PATIENT_ID,
  MRN_NUMBER,
  STREET,
  CITY,
  STATE,
  MARITAL_STATUS,
  SEX,
  SSN_NUMBER,
  SENDER_APPLICATION,
  SENDER_FACILITY,
  SENDER_DATE,
  MESSAGE_TYPE,
} = require("../constant/hl7Keys");
const store = require("../utils/store");
const { withOnlyAttrs } = require("../utils/object");
const { ADT_A01 } = require("../constant/messageType.constant");

/**
 * This class maps specific fields from a decoded HL7 message to a new map object.
 * refer: https://hl7-definition.caristix.com/v2/HL7v2.7/TriggerEvents/ADT_A01, to know
 * the position of the fields in the decoded HL7 message.
 */
class AdtA01Message {
  adtA01Message = null;
  constructor(decodedMessage) {
    if (!decodedMessage) {
      return this.adtA01Message;
    }
    const messageHeaderInfo = decodedMessage.MSH;
    const patientInfo = decodedMessage.PID;
    const newMap = new Map();
    const requiredKeys = store.get(ADT_A01);
    this.#mapMSH(newMap, messageHeaderInfo);
    this.#mapPID(newMap, patientInfo);
    this.adtA01Message = withOnlyAttrs(newMap, requiredKeys);
    return this.adtA01Message;
  }

  /**
   * Sets various message header information fields in a map object based on data from a MSH
   * message(refer: https://hl7-definition.caristix.com/v2/HL7v2.7/Segments/MSH).
   *
   * @param {object} map - A Map object that will be populated with message header information extracted from the MSH
   * message data.
   * @param {object} mshMessageData - contains message header
   * information.
   */
  #mapMSH(map, mshMessageData) {
    map.set(SENDER_APPLICATION, mshMessageData[3][1]);
    map.set(SENDER_FACILITY, mshMessageData[4][1]);
    map.set(SENDER_DATE, mshMessageData[7][1]);
    map.set(MESSAGE_TYPE, mshMessageData[9][1] + "_" + mshMessageData[9][2]);
  }

  /**
   * Sets various patient information fields in a map object based on data from a PID
   * message(refer:https://hl7-definition.caristix.com/v2/HL7v2.7/Segments/PID).
   *
   * @param {object} map - A Map object that will be populated with patient information extracted from the PID
   * message data.
   * @param {object} pidMessageData - contains patient identification
   * information.
   */
  #mapPID(map, pidMessageData) {
    map.set(
      FULL_NAME,
      pidMessageData[5][0][2] + " " + pidMessageData[5][0][1][1]
    );
    map.set(DOB, pidMessageData[7][1]);
    map.set(PHONE_NUMBER, pidMessageData[13][0][1]);
    map.set(EMAIL, pidMessageData[13][0][4]);
    map.set(MARITAL_STATUS, pidMessageData[16][1]);
    map.set(SSN_NUMBER, pidMessageData[19]);
    map.set(PATIENT_ID, pidMessageData[3][0][1]);
    map.set(MRN_NUMBER, pidMessageData[3][0][5]);
    map.set(STREET, pidMessageData[11][0][1][1]);
    map.set(CITY, pidMessageData[11][0][3]);
    map.set(STATE, pidMessageData[11][0][4]);
    map.set(SEX, pidMessageData[8]);
  }
}

module.exports = AdtA01Message;
