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
  ENCODING_TYPE,
  TYPE_OF_DATA,
  DATA,
  RESULT_STATUS,
} = require("../constant/hl7Keys");

function getOruR01Keys() {
  const patient = [
    FULL_NAME,
    DOB_BIRTH,
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

function getAdtA01Keys() {
  const patient = [
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
