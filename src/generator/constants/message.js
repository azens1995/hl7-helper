const { getDateTime } = require("../utils/getCurrentDateTime");

// Reference: https://hl7-definition.caristix.com/v2/HL7v2.7/Segments/MSH
const SENDING_APP = 3;
const VERSION_ID = 12;
const MESSAGE_TYPE = 9;
const RECEIVING_APP = 5;
const PROCESSING_ID = 11;
const FIELD_SEPARATOR = 1;
const MSH_SEGMENT_NAME = 0;
const SENDING_FACILITY = 4;
const MESSAGE_DATETIME = 7;
const MESSAGE_CONTROL_ID = 10;
const ENCODING_CHARACTERS = 2;

// subfield
const _VERSION_ID = 1;
const _EVENT_TIME = 1;
const _MESSAGE_CODE = 1;
const _TRIGGER_EVENT = 2;
const _PROCESSING_ID = 1;
const _SA_NAMESPACE_ID = 1;
const _RA_NAMESPACE_ID = 1;
const _MESSAGE_STRUCTURE = 3;

const MESSAGE = {
  FIELD_SEPARATOR: "|",
  ENCODING_CHARACTERS: "^~\\&",
  SENDING_APP: "EVOKE",
  RECEIVING_APP: "CLINIC",
  DATETIME: getDateTime(),
  MESSAGE_CODE: {
    ADT: "ADT",
    ACK: "ACK",
    ORU: "ORU",
  },
  TRIGGER_EVENT: {
    A01: "A01",
    A02: "A02",
    R01: "R01",
  },
  MESSAGE_CONTROL_ID: "MID-66",
  PROCESSING_ID: {
    TRAINING: "T",
    PRODUCTION: "P",
    DEBUGGING: "D",
  },
  VERSION_ID: "2.5.1",
};

// Defining HL7 types
const TYPE = {
  ADT_A01: "ADT_A01",
  ORU_R01: "ORU_R01",
};

module.exports = {
  TYPE,
  MESSAGE,
  VERSION_ID,
  _VERSION_ID,
  _EVENT_TIME,
  SENDING_APP,
  MESSAGE_TYPE,
  _MESSAGE_CODE,
  RECEIVING_APP,
  PROCESSING_ID,
  _TRIGGER_EVENT,
  _PROCESSING_ID,
  FIELD_SEPARATOR,
  _SA_NAMESPACE_ID,
  _RA_NAMESPACE_ID,
  MSH_SEGMENT_NAME,
  SENDING_FACILITY,
  MESSAGE_DATETIME,
  _MESSAGE_STRUCTURE,
  MESSAGE_CONTROL_ID,
  ENCODING_CHARACTERS,
};
