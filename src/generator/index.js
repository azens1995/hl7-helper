const { TYPE } = require("./constants/message");
const { ADT_A01 } = require("./messages/adt_a01");
const { ORU_R01 } = require("./messages/oru_r01");
const hl7v2 = require("@redoxengine/redox-hl7-v2");
const { exportHL7Message } = require("./utils/exportHL7Message");

const generator = new hl7v2.Generator();
const data1 = generator.write(ADT_A01);
const data2 = generator.write(ORU_R01);

/* NOTE:
Check whether the results folder is in root directory or not. If not, create one.
The exported hl7 message will be stored in results directory.
*/

// Export generated message to the file
exportHL7Message(data1, TYPE.ADT_A01);
exportHL7Message(data2, TYPE.ORU_R01);

// Final log after generating HL7 message
console.log("HL7 message will be generated in results directory.");
