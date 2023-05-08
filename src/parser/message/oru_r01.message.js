const {
  PATIENT_RESULT,
  PATIENT,
  PID_INFO,
  ORDER_OBSERVATION,
  OBSERVATION,
  ENCODING_DATA,
} = require("../constant/app.constant");
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
const { ORU_R01 } = require("../constant/messageType.constant");

class OruR01Message {
  oruMessage = null;
  constructor(decodedMessage) {
    if (!decodedMessage) {
      return this.oruMessage;
    }
    const messageHeaderInfo = decodedMessage.MSH;
    const patientInfo = decodedMessage[PATIENT_RESULT][0][PATIENT][PID_INFO];
    const orderObservationInfo =
      decodedMessage[PATIENT_RESULT][0][ORDER_OBSERVATION][0][OBSERVATION];
    const newMap = new Map();
    const requiredKeys = store.get(ORU_R01);
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
    const observationData = orderObservationData.reduce((acc, cum) => {
      if (cum.OBX[2] !== ENCODING_DATA) {
        return acc;
      }
      const newMap = new Map();
      const observationValue = cum.OBX[5][0].split("^");
      newMap.set(ENCODING_TYPE, observationValue[3]);
      newMap.set(TYPE_OF_DATA, observationValue[1]);
      newMap.set(DATA, observationValue[4]);
      newMap.set(RESULT_STATUS, cum.OBX[11]);
      acc.push(withOnlyAttrs(newMap, requiredKeys));
      return acc;
    }, []);
    return observationData;
  }
}

module.exports = OruR01Message;
