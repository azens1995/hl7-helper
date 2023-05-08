const {
  OBX_ID,
  VALUE_TYPE,
  _IDENTIFIER_ID,
  _IDENTIFIER_TEXT,
  OBSERVATION_VALUE,
  OBSERVATION_IDENTIFIER,
  OBSERVATION_RESULT_STATUS,
} = require("../constants/observationResult");

const OBX_SEGMENT = (
  id,
  status,
  valueType,
  identifierId,
  identifierText,
  observationValue
) => {
  const obxSegment = {
    [OBX_ID]: id,
    [OBSERVATION_IDENTIFIER]: {
      [_IDENTIFIER_ID]: identifierId,
      [_IDENTIFIER_TEXT]: identifierText,
    },
    [VALUE_TYPE]: valueType,
    [OBSERVATION_VALUE]: observationValue,
    [OBSERVATION_RESULT_STATUS]: status,
  };

  return obxSegment;
};

module.exports = { OBX_SEGMENT };
