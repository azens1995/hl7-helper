// Reference: https://hl7-definition.caristix.com/v2/HL7v2.5.1/Segments/OBR
const REQUEST_ID = 1;
const UNIVERSAL_SERVICE_IDENTIFIER = 4;

//subfields
_UNIVERSAL_SERVICE_ID = 1;

const REQUESTS = {
  ID: "1",
  IDENTIFIER_ID: "OBR-REQUEST",
};

module.exports = {
  REQUESTS,
  REQUEST_ID,
  _UNIVERSAL_SERVICE_ID,
  UNIVERSAL_SERVICE_IDENTIFIER,
};
