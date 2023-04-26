const hl7v2 = require("@redoxengine/redox-hl7-v2");
const { ADT_A01 } = require("./messages/adt_a01");

const generator = new hl7v2.Generator();
const data = generator.write(ADT_A01);

// Export generated message to the file
const fs = require("fs");
const { generateFileName } = require("./utils/generateName");

const fileName = generateFileName("ADT_A01");

const writeStream = fs.createWriteStream(`results/${fileName}`);
writeStream.write(data);
writeStream.end();
