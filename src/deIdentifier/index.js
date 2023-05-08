const path = require("path");
const { SRCDIR } = require("./constants/dirName");
const deIdentifyAllFiles = require("./utils/deIdentifyMultipleFiles");

const dirPath = path.join(__dirname, `../../${SRCDIR}/`);

/* NOTE:
- Check whether deidentified-files directory is present in root directory or not. If not, create one.
- The deidentified files will be stored in deidentified-files directory.
- There must be some files (hl7 message) in the /originals directory so that it can deidentify that files.
*/
deIdentifyAllFiles(dirPath);
