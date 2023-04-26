const hl7v2 = require("@redoxengine/redox-hl7-v2");
const { ADT_A01 } = require("./messages/adt_a01");
const { exportHL7Message } = require("./utils/exportHL7Message");

const generator = new hl7v2.Generator();
const data = generator.write(ADT_A01);

// Export generated message to the file
exportHL7Message(data, "ADT_A01");
