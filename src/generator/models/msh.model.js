const MSH_MODEL = {
  NAME: "MSH",
  FIELD_SEPARATOR: "|",
  ENCODING_CHARACTERS: "^~\\&",
  SENDING_APP: {
    NAMESPACE_ID: "EVOKE",
  },
  RECEIVING_APP: {
    NAMESPACE_ID: "CLINIC",
  },
  MESSAGE_DATETIME: {
    EVENT_TIME: "20150916004731",
  },
  MESSAGE_TYPE: {
    MESSAGE_CODE: "ADT",
    TRIGGER_EVENT: "A01",
    MESSAGE_STRUCTURE: "ADT_A01",
  },
  MESSAGE_CONTROL_ID: "MID-66",
  PROCESSING_ID: {
    ID: "T", //Training
  },
  VERSION_ID: {
    ID: "2.5.1",
  },
};

module.exports = { MSH_MODEL };
