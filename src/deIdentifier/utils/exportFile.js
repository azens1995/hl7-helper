const fs = require("fs");

const exportFile = (deidentified_msg, dirName, fileName) => {
  const dir = `deidentified-files/${dirName}`;

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
