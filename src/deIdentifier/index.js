const path = require("path");
const { SRCDIR } = require("./constants/dirName");
const deIdentifyAllFiles = require("./utils/deIdentifyMultipleFiles");

const dirPath = path.join(__dirname, `../../${SRCDIR}/`);

deIdentifyAllFiles(dirPath);
