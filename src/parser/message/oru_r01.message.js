const path = require("path");
const Hl7Parser = require("../utils/parser");
const { PID } = require("../constant/app.constant");
const {
  FULL_NAME,
  DOB_BIRTH,
  PATIENT_ID,
  MRN_NUMBER,
  STREET,
  CITY,
  STATE,
  SEX,
  SENDER_APPLICATION,
  SENDER_FACILITY,
  SENDER_DATE,
  MESSAGE_TYPE,
  ENCODING_TYPE,
  TYPE_OF_DATA,
  DATA,
  RESULT_STATUS,
} = require("../constant/hl7Keys");
const store = require("../utils/store");
const { withOnlyAttrs } = require("../utils/object");
const messageType = require("../constant/messageType.constant");

class OruR01Message {
  oruMessage = null;
  constructor() {
    const sampleFilePath = path.join(__dirname, "../../../orders/ORU_R01.txt");
    const parser = new Hl7Parser(sampleFilePath);
    const decodedMessage = parser.parse();
    const messageHeaderInfo = decodedMessage.MSH;
    const patientInfo =
      decodedMessage[PID.PATIENT_RESULT][0][PID.PATIENT][PID.PID_INFO];
    const orderObservationInfo =
      decodedMessage[PID.PATIENT_RESULT][0][PID.ORDER_OBSERVATION][0][
        PID.OBSERVATION
      ];
    const newMap = new Map();
    const requiredKeys = store.get(messageType.ORU_R01);
    this.#mapMSH(newMap, messageHeaderInfo);
    this.#mapPID(newMap, patientInfo);
    const observationData = this.#mapOrderObservation(
      orderObservationInfo,
      requiredKeys
    );
    this.oruMessage = {
      ...withOnlyAttrs(newMap, requiredKeys),
      observationData,
    };
    return this.oruMessage;
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
    map.set(PATIENT_ID, pidMessageData[3][0][1]);
    map.set(MRN_NUMBER, pidMessageData[3][0][5]);
    map.set(STREET, pidMessageData[11][0][1][1]);
    map.set(CITY, pidMessageData[11][0][3]);
    map.set(STATE, pidMessageData[11][0][4]);
    map.set(SEX, pidMessageData[8]);
  }

  #mapOrderObservation(orderObservationData, requiredKeys) {
    const observationData = orderObservationData
      .map((observation) => {
        const newMap = new Map();
        const observationValue = observation.OBX[5][0].split("^");
        newMap.set(ENCODING_TYPE, observationValue[3]);
        newMap.set(TYPE_OF_DATA, observationValue[1]);
        newMap.set(DATA, observationValue[4]);
        newMap.set(RESULT_STATUS, observation.OBX[11]);
        return withOnlyAttrs(newMap, requiredKeys);
      })
      .filter((value) => Object.keys(value).length !== 0);
    return observationData;
  }
}

module.exports = OruR01Message;
