const fs = require("fs");
const { PDFDocument } = require("pdf-lib");

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

async function mergeFiles(file1, file2) {
  if (!file1 || !file2) {
    throw new Error("Files not found.");
  }
  // Load the base64 encoded files
  const PdfFile1 = await PDFDocument.load(Buffer.from(file1, "base64"));
  const PdfFile2 = await PDFDocument.load(Buffer.from(file2, "base64"));

  // Create a new document
  const mergedPdfDoc = await PDFDocument.create();

  // Add the pages from the first File
  const file1Pages = await mergedPdfDoc.copyPages(
    PdfFile1,
    PdfFile1.getPageIndices()
  );
  file1Pages.forEach((page) => {
    mergedPdfDoc.addPage(page);
  });

  // Add the pages from the second File
  const file2Pages = await mergedPdfDoc.copyPages(
    PdfFile2,
    PdfFile2.getPageIndices()
  );
  file2Pages.forEach((page) => {
    mergedPdfDoc.addPage(page);
  });

  // Save the merged PDF to a buffer
  const mergedPdfBytes = await mergedPdfDoc.save();

  // Convert the buffer to a base64 encoded string
  const mergedBase64PDF = Buffer.from(mergedPdfBytes).toString("base64");

  return mergedBase64PDF;
}
module.exports = {
  getFile,
  getFilesFromDir,
  mergeFiles,
};
