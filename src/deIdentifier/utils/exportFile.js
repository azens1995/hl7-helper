const fs = require("fs");
const { OUTDIR } = require("../constants/dirName");

const exportFile = (deidentified_msg, dirName, fileName) => {
  const dir = `${OUTDIR}/${dirName}`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  try {
    fs.writeFileSync(`${dir}/${fileName}`, deidentified_msg);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { exportFile };
