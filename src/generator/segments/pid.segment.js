const {
  DOB,
  SEX,
  _DOB,
  _CITY,
  ADDRESS,
  _COUNTRY,
  PATIENT_ID,
  PHONENUMBER,
  _FIRST_NAME,
  PATIENT_NAME,
  _FAMILY_NAME,
  _PID_LIST_ID,
  _COUNTRY_CODE,
  _PHONE_NUMBER,
  MARITAL_STATUS,
  _NAME_TYPE_CODE,
  _MARITAL_STATUS,
  _PID_LIST_TYPE_CODE,
  PATIENT_SEGMENT_NAME,
  PATIENT_IDENTIFIER_LIST,
} = require("../constants/patientIdentification");
const { SEGMENT } = require("../constants/segment");
const { PATIENT } = require("../models/patient.model");

const PID_SEGMENT = {
  [PATIENT_SEGMENT_NAME]: SEGMENT.PID,
  [PATIENT_ID]: PATIENT.patientId,
  [PATIENT_NAME]: [
    {
      [_FAMILY_NAME]: {
        1: PATIENT.lastName,
      },
      [_FIRST_NAME]: PATIENT.firstName,
      [_NAME_TYPE_CODE]: PATIENT.nameTypeCode,
    },
  ],
  [PATIENT_IDENTIFIER_LIST]: [
    {
      [_PID_LIST_ID]: PATIENT.identifierList.id,
      [_PID_LIST_TYPE_CODE]: PATIENT.identifierList.idTypeCode,
    },
  ],
  [DOB]: {
    [_DOB]: PATIENT.dob.split("-").join("") + PATIENT.dot.split(":").join(""),
  },
  [PHONENUMBER]: [
    {
      [_COUNTRY_CODE]: PATIENT.phoneNumber.split(" ")[0],
      [_PHONE_NUMBER]: PATIENT.phoneNumber.split(" ")[1],
    },
  ],
  [MARITAL_STATUS]: {
    [_MARITAL_STATUS]: PATIENT.maritalStatus,
  },
  [SEX]: PATIENT.sex,
  [ADDRESS]: [
    {
      [_CITY]: PATIENT.address.city,
      [_COUNTRY]: PATIENT.address.country,
    },
  ],
};

module.exports = { PID_SEGMENT };
