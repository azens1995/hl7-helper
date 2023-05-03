const fs = require("fs");
const path = require("path");
const { PDFDocument } = require("pdf-lib");

async function exportReport(message, base64CoverPagePdf) {
  if (!message || !base64CoverPagePdf) {
    return;
  }
  const { observationData, messageType: mshType } = message;
  if (!observationData) {
    return;
  }

  for (const value of observationData) {
    const folderName = `reports/${mshType}`;
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
    const { data: base64PDF2 } = value;
    const mergedBase64PDF = await mergePDFs(base64CoverPagePdf, base64PDF2);

    try {
      fs.writeFileSync(
        `${folderName}/${new Date().getTime()}.pdf`,
        mergedBase64PDF,
        "base64"
      );
    } catch (err) {
      console.log(err);
    }
  }
}

async function mergePDFs(base64PDF1, base64PDF2) {
  // Load the base64 encoded PDF files
  const pdfDoc1 = await PDFDocument.load(Buffer.from(base64PDF1, "base64"));
  const pdfDoc2 = await PDFDocument.load(Buffer.from(base64PDF2, "base64"));

  // Create a new PDF document
  const mergedPdfDoc = await PDFDocument.create();

  // Add the pages from the first PDF
  const pdfDoc1Pages = await mergedPdfDoc.copyPages(
    pdfDoc1,
    pdfDoc1.getPageIndices()
  );
  pdfDoc1Pages.forEach((page) => {
    mergedPdfDoc.addPage(page);
  });

  // Add the pages from the second PDF
  const pdfDoc2Pages = await mergedPdfDoc.copyPages(
    pdfDoc2,
    pdfDoc2.getPageIndices()
  );
  pdfDoc2Pages.forEach((page) => {
    mergedPdfDoc.addPage(page);
  });

  // Save the merged PDF to a buffer
  const mergedPdfBytes = await mergedPdfDoc.save();

  // Convert the buffer to a base64 encoded string
  const mergedBase64PDF = Buffer.from(mergedPdfBytes).toString("base64");

  return mergedBase64PDF;
}

// const path1 = path.join(__dirname, "./../../../cover-page/coverpage.txt");

// const path2 = path.join(__dirname, "./../../../cover-page/page.txt");
// // Example usage
// const base64PDF1 = fs.readFileSync(path1, "utf-8");
// const base64PDF2 = fs.readFileSync(path2, "utf-8");
// mergePDFs(base64PDF1, base64PDF2).then((result) => {
//   console.log(result);
// });

module.exports = exportReport;
