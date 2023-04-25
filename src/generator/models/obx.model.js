const { base64String } = require("../utils/pdf_to_base64string");

const base64Stringdata = base64String();

const OBX_MODEL = {
  OBSERVATION_IDENTIFIER: {
    ID: "OBX-REPORT",
  },
  OBSERVATION_VALUE: [
    {
      1: base64Stringdata,
    },
  ],
  OBSERVATION_RESULT_STATUS: "S", //partial results
};

module.exports = {
  OBX_MODEL,
};
