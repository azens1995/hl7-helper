const { getRandomString } = require("../utils/getRandomString");
const { base64String } = require("../utils/pdf_to_base64string");

const base64Stringdata = base64String();

// Reference: https://hl7-definition.caristix.com/v2/HL7v2.5.1/Segments/OBX
const OBX_ID = 1;
const VALUE_TYPE = 2;
const OBSERVATION_VALUE = 5;
const OBSERVATION_IDENTIFIER = 3;
const OBSERVATION_RESULT_STATUS = 11;

// subfields
_IDENTIFIER_ID = 1;
_IDENTIFIER_TEXT = 2;

const SAMPLE_OBSERVATION_VALUE = {
  ENCAPSULATED_DATA: [
    {
      1: "Application",
      2: "pdf", // Note: if the file is image, need to pass image here
      4: "Base64",
      5: base64Stringdata,
    },
  ],
  PERSON_NAME: ["Ishwar"],
};

const RESULTS = {
  ID: 1,
  VALUE_TYPE: {
    ENCAPSULATED_DATA: "ED",
    STRING_DATA: "ST",
    PERSON_NAME: "PN",
  },
  STATUS: {
    PARTIAL_RESULT: "S",
    RESULT_ENTER_NOT_VERIFIED: "R",
  },
  IDENTIFIER_ID: {
    RANDOM_STRING: getRandomString(),
  },
  IDENTIFIER_TEXT: {
    PERSON_NAME: "Sample_Name",
    ENCAPSULATED_DATA: "Sample_Report",
  },
};

module.exports = {
  OBX_ID,
  RESULTS,
  VALUE_TYPE,
  _IDENTIFIER_ID,
  _IDENTIFIER_TEXT,
  OBSERVATION_VALUE,
  OBSERVATION_IDENTIFIER,
  SAMPLE_OBSERVATION_VALUE,
  OBSERVATION_RESULT_STATUS,
};
