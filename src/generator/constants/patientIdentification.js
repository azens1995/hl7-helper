// Reference: https://hl7-definition.caristix.com/v2/HL7v2.5.1/Segments/PID
const DOB = 7;
const SEX = 8;
const ADDRESS = 11;
const PATIENT_ID = 1;
const PATIENT_NAME = 5;
const PHONENUMBER = 13;
const MARITAL_STATUS = 16;
const PATIENT_SEGMENT_NAME = 0;
const PATIENT_IDENTIFIER_LIST = 3;

//subfields
const _DOB = 1;
const _CITY = 3;
const _COUNTRY = 6;
const _FIRST_NAME = 2;
const _FAMILY_NAME = 1;
const _PID_LIST_ID = 1;
const _COUNTRY_CODE = 5;
const _PHONE_NUMBER = 1;
const _NAME_TYPE_CODE = 7;
const _MARITAL_STATUS = 1;
const _PID_LIST_TYPE_CODE = 5;

module.exports = {
  DOB,
  SEX,
  _DOB,
  _CITY,
  ADDRESS,
  _COUNTRY,
  PATIENT_ID,
  _FIRST_NAME,
  PHONENUMBER,
  _FAMILY_NAME,
  _PID_LIST_ID,
  PATIENT_NAME,
  _COUNTRY_CODE,
  _PHONE_NUMBER,
  MARITAL_STATUS,
  _NAME_TYPE_CODE,
  _MARITAL_STATUS,
  _PID_LIST_TYPE_CODE,
  PATIENT_SEGMENT_NAME,
  PATIENT_IDENTIFIER_LIST,
};
