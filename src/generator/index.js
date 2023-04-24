const { MSH_SEGMENT } = require("./segments/msh.segment");
const { PID_SEGMENT } = require("./segments/pid.segment");
const { PV1_SEGMENT } = require("./segments/pv1.segment");
const { EVN_SEGMENT } = require("./segments/evn.segment");

// Admit a patient
const ADT_A01 = {
  MSH: MSH_SEGMENT,
  PID: PID_SEGMENT,
  EVN: EVN_SEGMENT,
  PV1: PV1_SEGMENT,
};

const hl7v2 = require("@redoxengine/redox-hl7-v2");
const generator = new hl7v2.Generator();
const data = generator.write(ADT_A01);
console.log(data);
