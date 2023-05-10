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
} = require("../constants/hl7Keys");
const {
  senderApplication,
  senderFacility,
  senderDate,
  messageType,
} = require("../fields/msh.field");
const {
  patientName,
  doBirth,
  phoneNumber,
  maritalStatus,
  ssnNumber,
  patientId,
  patientAddress,
  sex,
} = require("../fields/pid.field");
const store = require("../utils/store");
const { withOnlyAttrs } = require("../utils/object");
const { ADT_A01 } = require("../constants/messageType.constant");

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
    const senderApplicationInfo = mshMessageData[senderApplication.field];
    const senderFacilityInfo = mshMessageData[senderFacility.field];
    const senderDateInfo = mshMessageData[senderDate.field];
    const messageTypeInfo = mshMessageData[messageType.field];
    map.set(
      SENDER_APPLICATION,
      senderApplicationInfo[senderApplication.subfields.namespaceId]._text
    );
    map.set(
      SENDER_FACILITY,
      senderFacilityInfo[senderFacility.subfields.namespaceId]._text
    );
    map.set(SENDER_DATE, senderDateInfo[senderDate.subfields.time]._text);
    map.set(
      MESSAGE_TYPE,
      messageTypeInfo[messageType.subfields.messageCode]._text +
        "_" +
        messageTypeInfo[messageType.subfields.triggerEvent]._text
    );
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
    const patientNameInfo = pidMessageData[patientName.field];
    const doBirthInfo = pidMessageData[doBirth.field];
    const phoneNumberInfo = pidMessageData[phoneNumber.field];
    const maritalStatusInfo = pidMessageData[maritalStatus.field];
    const ssnNumberInfo = pidMessageData[ssnNumber.field];
    const patientIdInfo = pidMessageData[patientId.field];
    const patientAddressInfo = pidMessageData[patientAddress.field];
    const sexInfo = pidMessageData[sex.field];
    map.set(
      FULL_NAME,
      patientNameInfo[patientName.subfields.firstName]._text +
        " " +
        patientNameInfo[patientName.subfields.lastName]._text
    );
    map.set(DOB, doBirthInfo[doBirth.subfields.time]._text);
    map.set(
      PHONE_NUMBER,
      phoneNumberInfo[phoneNumber.subfields.telePhoneNumber]._text
    );
    map.set(EMAIL, phoneNumberInfo[phoneNumber.subfields.email]?._text);
    map.set(
      MARITAL_STATUS,
      maritalStatusInfo[maritalStatus.subfields.maritalIdentifier]?._text
    );
    map.set(SSN_NUMBER, ssnNumberInfo._text);
    map.set(
      PATIENT_ID,
      patientIdInfo[patientId.subfields.patientIdNumber]._text
    );
    map.set(
      MRN_NUMBER,
      patientIdInfo[patientId.subfields.patientIdMrnNumber]._text
    );
    map.set(
      STREET,
      patientAddressInfo[patientAddress.subfields.street.field][
        patientAddress.subfields.street.subfields.mailingAddress
      ]._text
    );
    map.set(CITY, patientAddressInfo[patientAddress.subfields.city]._text);
    map.set(STATE, patientAddressInfo[patientAddress.subfields.state]._text);
    map.set(SEX, sexInfo._text);
  }
}

module.exports = AdtA01Message;
