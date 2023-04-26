const { base64String } = require("../utils/pdf_to_base64string");

const base64Stringdata = base64String();

const OBX_MODEL = {
  OBX_ID: "1",
  OBSERVATION_IDENTIFIER: {
    ID: "OBX-REPORT",
  },
  VALUE_TYPE: "ED",
  OBSERVATION_VALUE: [
    {
      1: "Application",
      2: "pdf",
      4: "Base64",
      5: base64Stringdata,
    },
  ],
  OBSERVATION_RESULT_STATUS: "S", //partial results
};

module.exports = {
  OBX_MODEL,
};
