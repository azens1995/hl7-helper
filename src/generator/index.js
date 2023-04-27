const { ADT_A01 } = require("./messages/adt_a01");
const { ORU_R01 } = require("./messages/oru_r01");
const { MESSAGE } = require("./constants/message");
const hl7v2 = require("@redoxengine/redox-hl7-v2");
const { exportHL7Message } = require("./utils/exportHL7Message");

const generator = new hl7v2.Generator();
const data1 = generator.write(ADT_A01);
const data2 = generator.write(ORU_R01);

// Export generated message to the file
exportHL7Message(data1, MESSAGE.ADT_A01);
exportHL7Message(data2, MESSAGE.ORU_R01);
