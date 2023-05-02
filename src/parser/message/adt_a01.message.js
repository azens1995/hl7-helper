const path = require("path");
const Hl7Parser = require("../utils/parser");
const {
  FULL_NAME,
  DOB_BIRTH,
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
const messageType = require("../constant/messageType.constant");
class AdtA01Message {
  adtA01Message = null;
  constructor() {
    const sampleFilePath = path.join(__dirname, "../../../orders/ADT_AO1.txt");
    const parser = new Hl7Parser(sampleFilePath);
    const decodedMessage = parser.parse();
    const messageHeaderInfo = decodedMessage.MSH;
    const patientInfo = decodedMessage.PID;
    const newMap = new Map();
    const requiredKeys = store.get(messageType.ADT_A01);
    this.#mapMSH(newMap, messageHeaderInfo);
    this.#mapPID(newMap, patientInfo);
    this.adtA01Message = withOnlyAttrs(newMap, requiredKeys);
    return this.adtA01Message;
  }

  #mapMSH(map, mshMessageData) {
    map.set(SENDER_APPLICATION, mshMessageData[3][1]);
    map.set(SENDER_FACILITY, mshMessageData[4][1]);
    map.set(SENDER_DATE, mshMessageData[7][1]);
    map.set(MESSAGE_TYPE, mshMessageData[9][1] + "_" + mshMessageData[9][2]);
  }

  #mapPID(map, pidMessageData) {
    map.set(
      FULL_NAME,
      pidMessageData[5][0][2] + " " + pidMessageData[5][0][1][1]
    );
    map.set(DOB_BIRTH, pidMessageData[7][1]);
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
