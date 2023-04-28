const path = require("path");
const Hl7Parser = require("./utils/parser");
const reportExtraction = require("./utils/exportReport");
const exportData = require("./utils/exportData");

const sampleFilePath = path.join(__dirname, "./../../orders/ADT_AO1.txt");
const parser = new Hl7Parser(sampleFilePath);
const decodedMessage = parser.parse();
const messageType = decodedMessage.MSH[9][1] + "_" + decodedMessage.MSH[9][2];
const data = exportData(messageType.toUpperCase(), decodedMessage);
reportExtraction();
console.log("data", data);
