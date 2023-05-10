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
  ENCODING_TYPE,
  TYPE_OF_DATA,
  DATA,
  RESULT_STATUS,
} = require("../constant/hl7Keys");

/**
 * Get required fields for the ORU_R01 message type.
 *
 * @returns {string[]}
 */
function getOruR01Keys() {
  const patient = [
    FULL_NAME,
    DOB,
    PATIENT_ID,
    MRN_NUMBER,
    STREET,
    CITY,
    STATE,
    SEX,
    SENDER_APPLICATION,
    SENDER_DATE,
    SENDER_FACILITY,
    MESSAGE_TYPE,
  ];

  const report = [ENCODING_TYPE, TYPE_OF_DATA, DATA, RESULT_STATUS];

  return [...patient, ...report];
}

/**
 * Get required fields for the ADT_R01 message type.
 *
 * @returns {string[]}
 */
function getAdtA01Keys() {
  const patient = [
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
    SENDER_DATE,
    SENDER_FACILITY,
    MESSAGE_TYPE,
  ];

  return [...patient];
}

module.exports = {
  getAdtA01Keys,
  getOruR01Keys,
};
