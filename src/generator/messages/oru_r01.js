const {
  RESULTS,
  SAMPLE_OBSERVATION_VALUE,
} = require("../constants/observationResult");
const { MESSAGE, TYPE } = require("../constants/message");
const { MSH_SEGMENT } = require("../segments/msh.segment");
const { PID_SEGMENT } = require("../segments/pid.segment");
const { PV1_SEGMENT } = require("../segments/pv1.segment");
const { OBX_SEGMENT } = require("../segments/obx.segment");
const { OBR_SEGMENT } = require("../segments/obr.segment");
const { SPM_SEGMENT } = require("../segments/spm.segment");
const { TQ1_SEGMENT } = require("../segments/tq1.segment");

// Unsolicited transmission of an observation message
// Reference document for ORU_R01:
// https://hl7-definition.caristix.com/v2/HL7v2.7/TriggerEvents/ORU_R01
const ORU_R01 = {
  MSH: MSH_SEGMENT(
    MESSAGE.MESSAGE_CODE.ORU,
    MESSAGE.TRIGGER_EVENT.R01,
    TYPE.ORU_R01
  ),
  PATIENT_RESULT: {
    PATIENT: {
      PID: PID_SEGMENT,
      VISIT: {
        PV1: PV1_SEGMENT,
      },
    },
    ORDER_OBSERVATION: {
      OBR: OBR_SEGMENT,
      TIMING_QTY: {
        TQ1: TQ1_SEGMENT,
      },
      OBSERVATION: [
        // Can pass multiple obx segment
        {
          OBX: OBX_SEGMENT(
            RESULTS.ID,
            RESULTS.STATUS.PARTIAL_RESULT,
            RESULTS.VALUE_TYPE.ENCAPSULATED_DATA,
            RESULTS.IDENTIFIER_ID.RANDOM_STRING,
            RESULTS.IDENTIFIER_TEXT.ENCAPSULATED_DATA,
            SAMPLE_OBSERVATION_VALUE.ENCAPSULATED_DATA
          ),
        },
        {
          OBX: OBX_SEGMENT(
            ++RESULTS.ID,
            RESULTS.STATUS.RESULT_ENTER_NOT_VERIFIED,
            RESULTS.VALUE_TYPE.PERSON_NAME,
            RESULTS.IDENTIFIER_ID.RANDOM_STRING,
            RESULTS.IDENTIFIER_TEXT.PERSON_NAME,
            SAMPLE_OBSERVATION_VALUE.PERSON_NAME
          ),
        },
      ],
      SPECIMEN: {
        SPM: SPM_SEGMENT,
      },
    },
  },
};

module.exports = { ORU_R01 };
