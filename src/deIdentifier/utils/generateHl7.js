const hl7v2 = require("@redoxengine/redox-hl7-v2");

const generateHL7 = (message) => {
  const generator = new hl7v2.Generator();
  const hl7message = generator.write(message);

  return hl7message;
};

module.exports = { generateHL7 };
