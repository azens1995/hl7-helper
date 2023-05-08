// Reference: https://hl7-definition.caristix.com/v2/HL7v2.5.1/Segments/EVN
const EVENT_TYPE_CODE = 1;
const RECORDED_DATE_TIME = 2;
const EVENT_REQUEST_CODE = 4;

// subfield
const _DATE_TIME = 1;

const EVENT_CODE = {
  PATIENT_VISIT: "A01",
  PATIENT_REQUEST: "01",
};

module.exports = {
  _DATE_TIME,
  EVENT_CODE,
  EVENT_TYPE_CODE,
  RECORDED_DATE_TIME,
  EVENT_REQUEST_CODE,
};
