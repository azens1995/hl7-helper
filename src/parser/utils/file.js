const fs = require("fs");

function getFile(path) {
  if (!path) {
    throw new Error("Path not found.");
  }
  try {
    const file = fs.readFileSync(path, "utf-8");
    if (!file) {
      throw new Error("File not found.");
    }
    return file;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

function getFilesFromDir(path) {
  if (!path) {
    throw new Error("Path not found.");
  }
  try {
    const files = fs.readdirSync(path, { encoding: "utf-8" });
    if (!files.length) {
      throw new Error("Files not found.");
    }
    return files;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = {
  getFile,
  getFilesFromDir,
};
