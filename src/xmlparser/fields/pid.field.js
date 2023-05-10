const {
  PATIENT_NAME,
  PATIENT_FIRST_NAME,
  PATIENT_LAST_NAME,
  DATE_OF_BIRTH,
  PHONE_NUMBER,
  TELEPHONE_NUMBER,
  EMAIL,
  MARITAL_STATUS,
  MARITAL_STATUS_IDENTIFIER,
  SSN_NUMBER,
  PATIENT_ID,
  PATIENT_ID_NUMBER,
  PATIENT_ID_MRN_NUMBER,
  PATIENT_ADDRESS,
  STREET_ADDRESS,
  CITY,
  STATE,
  SEX,
  DATE_OF_BIRTH_TIME,
  MAILING_ADDRESS,
} = require("../constants/pid.constant");

module.exports = {
  patientName: {
    field: PATIENT_NAME,
    subfields: {
      firstName: PATIENT_FIRST_NAME,
      lastName: PATIENT_LAST_NAME,
    },
  },
  doBirth: {
    field: DATE_OF_BIRTH,
    subfields: {
      time: DATE_OF_BIRTH_TIME,
    },
  },
  phoneNumber: {
    field: PHONE_NUMBER,
    subfields: {
      telePhoneNumber: TELEPHONE_NUMBER,
      email: EMAIL,
    },
  },
  maritalStatus: {
    field: MARITAL_STATUS,
    subfields: {
      maritalIdentifier: MARITAL_STATUS_IDENTIFIER,
    },
  },
  ssnNumber: {
    field: SSN_NUMBER,
  },
  patientId: {
    field: PATIENT_ID,
    subfields: {
      patientIdNumber: PATIENT_ID_NUMBER,
      patientIdMrnNumber: PATIENT_ID_MRN_NUMBER,
    },
  },
  patientAddress: {
    field: PATIENT_ADDRESS,
    subfields: {
      street: {
        field: STREET_ADDRESS,
        subfields: {
          mailingAddress: MAILING_ADDRESS,
        },
      },
      city: CITY,
      state: STATE,
    },
  },
  sex: {
    field: SEX,
  },
};
