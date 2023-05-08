const fs = require("fs");
const path = require("path");
const { PDFDocument } = require("pdf-lib");

/**
 * Merges two PDF files into a single PDF file.
 *
 * @param {string} pdfFilePath1 - The file path of the first PDF file to be merged.
 * @param {string} pdfFilePath2 - The file path of the second PDF file that needs to be merged with the first
 * PDF file.
 * @returns the merged PDF file as a byte array.
 */
async function mergeFiles(pdfFilePath1, pdfFilePath2) {
  const file1 = fs.readFileSync(pdfFilePath1);
  const file2 = fs.readFileSync(pdfFilePath2);
  if (!file1 || !file2) {
    throw new Error("Files not found");
  }
  // Load the base64 encoded files
  const PdfFile1 = await PDFDocument.load(file1);
  const PdfFile2 = await PDFDocument.load(file2);

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

  // Save the merged PDF
  const mergedPdfBytes = await mergedPdfDoc.save();

  return mergedPdfBytes;
}

const pdfFilePath1 = path.join(__dirname, "./../../cover-page/file1.pdf");
const pdfFilePath2 = path.join(__dirname, "./../../cover-page/file2.pdf");
const outputFilePath = path.join(__dirname, "./../../reports/mergeReport.pdf");

mergeFiles(pdfFilePath1, pdfFilePath2).then((file) => {
  fs.writeFileSync(outputFilePath, file);
});

module.exports = mergeFiles;
