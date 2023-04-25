const PID_MODEL = {
  NAME: "PID",
  PATIENT_ID: "PID-1",
  PATIENT_NAME: {
    FAMILY_NAME: {
      1: "Evans",
    },
    FIRST_NAME: "Chris",
    TYPE_CODE: "B", //birth name
  },
  PATIENT_IDENTIFIER_LIST: {
    ID: "1",
    ID_TYPE_CODE: "ANON", //Anonymous identifier
  },
  DATE_OF_BIRTH: {
    DATE_TIME: "19970916004731",
  },
  PHONENUMBER: {
    COUNTRY_CODE: "415",
    LOCAL_NUMBER: "555-7212",
  },
  MARITAL_STATUS: {
    IDENTIFIER: "B", //unmarried
  },
  SEX: "M",
  ADDRESS: {
    CITY: "San Francisco",
    COUNTRY: "California",
  },
};

module.exports = { PID_MODEL };
