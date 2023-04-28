const fs = require("fs");
const { generateFileName } = require("./generateName");

const exportHL7Message = (data, message_type) => {
  const fileName = generateFileName(message_type);

  const writeStream = fs.createWriteStream(`results/${fileName}`);
  writeStream.write(data);
  writeStream.end();
};

module.exports = { exportHL7Message };
