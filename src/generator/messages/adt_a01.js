const {
  RESULTS,
  SAMPLE_OBSERVATION_VALUE,
} = require("../constants/observationResult");
const { MESSAGE, TYPE } = require("../constants/message");
const { PID_SEGMENT } = require("../segments/pid.segment");
const { PV1_SEGMENT } = require("../segments/pv1.segment");
const { EVN_SEGMENT } = require("../segments/evn.segment");
const { OBX_SEGMENT } = require("../segments/obx.segment");
const { MSH_SEGMENT } = require("../segments/msh.segment");

// Admit a patient
// Reference document for the ADT_A01:
// https://hl7-definition.caristix.com/v2/HL7v2.7/TriggerEvents/ADT_A01
const ADT_A01 = {
  MSH: MSH_SEGMENT(
    MESSAGE.MESSAGE_CODE.ADT,
    MESSAGE.TRIGGER_EVENT.A01,
    TYPE.ADT_A01
  ),
  PID: PID_SEGMENT,
  EVN: EVN_SEGMENT,
  PV1: PV1_SEGMENT,
  OBX: OBX_SEGMENT(
    "1", //id
    RESULTS.STATUS.PARTIAL_RESULT,
    RESULTS.VALUE_TYPE.ENCAPSULATED_DATA,
    RESULTS.IDENTIFIER_ID.RANDOM_STRING,
    RESULTS.IDENTIFIER_TEXT.ENCAPSULATED_DATA,
    SAMPLE_OBSERVATION_VALUE.ENCAPSULATED_DATA
  ),
};

module.exports = { ADT_A01 };
