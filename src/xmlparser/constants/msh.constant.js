//Note: HD, TS, MSG--> data types
// refer: https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes
const SENDER_APPLICATION = "MSH.3";
const SENDER_APPLICATION_NAMESPACE_ID = "HD.1";
const SENDER_APPLICATION_UNIVERSAL_ID = "HD.2";
const SENDER_APPLICATION_UNIVERSAL_ID_TYPE = "HD.3";

const SENDER_FACILITY = "MSH.4";
const SENDER_FACILITY_NAMESPACE_ID = "HD.1";
const SENDER_FACILITY_UNIVERSAL_ID = "HD.2";
const SENDER_FACILITY_UNIVERSAL_ID_TYPE = "HD.3";

const SENDER_DATE = "MSH.7";
const SENDER_DATE_TIME = "TS.1";

const MESSAGE_TYPE = "MSH.9";
const MESSAGE_TYPE_CODE = "MSG.1";
const MESSAGE_TYPE_TRIGGER_EVENT = "MSG.2";

module.exports = {
  SENDER_APPLICATION,
  SENDER_APPLICATION_NAMESPACE_ID,
  SENDER_APPLICATION_UNIVERSAL_ID,
  SENDER_APPLICATION_UNIVERSAL_ID_TYPE,
  SENDER_FACILITY,
  SENDER_FACILITY_NAMESPACE_ID,
  SENDER_FACILITY_UNIVERSAL_ID,
  SENDER_FACILITY_UNIVERSAL_ID_TYPE,
  SENDER_DATE,
  SENDER_DATE_TIME,
  MESSAGE_TYPE,
  MESSAGE_TYPE_CODE,
  MESSAGE_TYPE_TRIGGER_EVENT,
};
