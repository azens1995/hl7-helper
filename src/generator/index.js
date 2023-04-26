const { MSH_SEGMENT } = require("./segments/msh.segment");
const { PID_SEGMENT } = require("./segments/pid.segment");
const { PV1_SEGMENT } = require("./segments/pv1.segment");
const { EVN_SEGMENT } = require("./segments/evn.segment");
const { OBX_SEGMENT } = require("./segments/obx.segment");

// Admit a patient
const ADT_A01 = {
  MSH: MSH_SEGMENT,
  PID: PID_SEGMENT,
  EVN: EVN_SEGMENT,
  PV1: PV1_SEGMENT,
  OBX: OBX_SEGMENT,
};

const hl7v2 = require("@redoxengine/redox-hl7-v2");
const generator = new hl7v2.Generator();
const data = generator.write(ADT_A01);

// Export generated message to the file
const fs = require("fs");

const writeStream = fs.createWriteStream("results/hl7_message.txt");
writeStream.write(data);
writeStream.end();
