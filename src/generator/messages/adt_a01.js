const { MSH_SEGMENT } = require("../segments/msh.segment");
const { PID_SEGMENT } = require("../segments/pid.segment");
const { PV1_SEGMENT } = require("../segments/pv1.segment");
const { EVN_SEGMENT } = require("../segments/evn.segment");
const { OBX_SEGMENT } = require("../segments/obx.segment");

// Admit a patient
const ADT_A01 = {
  MSH: MSH_SEGMENT,
  PID: PID_SEGMENT,
  EVN: EVN_SEGMENT,
  PV1: PV1_SEGMENT,
  OBX: OBX_SEGMENT,
};

module.exports = { ADT_A01 };
