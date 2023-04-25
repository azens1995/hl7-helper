const fs = require('fs');
const path = require('path');
const Hl7Parser = require('../utils/parser');

function reportExtraction() {
    const sampleFilePath = path.join(__dirname, "./../../../Hl7Samples/ADT_AO1.txt");
    const parser = new Hl7Parser(sampleFilePath);
    const message = parser.parse();
    const base64File = message.obx.observationData;
    fs.writeFileSync(`reports/${new Date().getTime()}-ADT_AO1.pdf`, base64File, 'base64'); 
}

module.exports =  reportExtraction;