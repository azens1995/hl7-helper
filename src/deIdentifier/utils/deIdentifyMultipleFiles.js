const path = require("path");
const { readdir } = require("fs/promises");
const { parseHL7 } = require("./parseHl7");
const { exportFile } = require("./exportFile");
const { generateHL7 } = require("./generateHl7");
const getFilesPathToDeidentify = require("./getFiles");
const { deIdentification } = require("./deidentification");
const { SUCCESS_MESSAGE, ERROR_MESSAGE } = require("../constants/log");

const deIdentifyAllFiles = async (dirPath) => {
  const filesPath = await getFilesPathToDeidentify(dirPath);

  try {
    const files = await readdir(filesPath);

    for (const file of files) {
      const filePath = path.join(filesPath, file);

      // Parse the message
      const parsedMessage = parseHL7(filePath);

      // Get message type
      const MSH = parsedMessage.MSH;
      const messageType = `${MSH["9"]["1"]}_${MSH["9"]["2"]}`;

      // DeIdentify the PHI list
      const deIdentifiedMessage = deIdentification(parsedMessage, messageType);

      // Re-generate hl7 message
      const hl7Message = generateHL7(deIdentifiedMessage);

      // Export regenerated file to the new location
      const dirName = filesPath.split("\\")[filesPath.split("\\").length - 1];

      exportFile(hl7Message, dirName, file);
    }

    console.log(SUCCESS_MESSAGE);
  } catch {
    console.log(ERROR_MESSAGE);
  }
};

module.exports = deIdentifyAllFiles;
