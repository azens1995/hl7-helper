const path = require("path");
const getDate = require("./todayDate");
const { readdir } = require("fs/promises");

const getFilesPathToDeidentify = async (dirPath) => {
  const directory = await readdir(dirPath);
  const today = getDate();

  let filesPath = "";

  for (const dir of directory) {
    if (dir.startsWith(today)) {
      filesPath = path.join(dirPath, dir);
      break;
    }
  }

  return filesPath;
};

module.exports = getFilesPathToDeidentify;
