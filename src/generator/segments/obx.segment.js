const {
  OBX_ID,
  RESULTS,
  VALUE_TYPE,
  OBSERVATION_VALUE,
  OBSERVATION_IDENTIFIER,
  _OBSERVATION_IDENTIFIER,
  OBSERVATION_RESULT_STATUS,
} = require("../constants/observationResult");
const { base64String } = require("../utils/pdf_to_base64string");

const base64Stringdata = base64String();

const OBX_SEGMENT = {
  [OBX_ID]: RESULTS.ID,
  [OBSERVATION_IDENTIFIER]: {
    [_OBSERVATION_IDENTIFIER]: RESULTS.IDENTIFIER_ID,
  },
  [VALUE_TYPE]: RESULTS.VALUE_TYPE.ENCAPSULATED_DATA,
  [OBSERVATION_VALUE]: [
    {
      1: "Application",
      2: "pdf",
      4: "Base64",
      5: base64Stringdata,
    },
  ],
  [OBSERVATION_RESULT_STATUS]: RESULTS.STATUS.PARTIAL_RESULT,
};

module.exports = { OBX_SEGMENT };
