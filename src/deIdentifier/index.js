const path = require("path");
const deIdentifyAllFiles = require("./utils/deIdentifyMultipleFiles");

const dirPath = path.join(__dirname, "../../originals/");

deIdentifyAllFiles(dirPath);
