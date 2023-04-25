const fs = require('fs');
const path = require('path');
const OBXMapper = require("../fields/obx.field")
const Hl7Parser = require('../utils/parser');

function reportExtraction() {
    const sampleFilePath = path.join(__dirname, "./../../../Hl7Samples/ADT_AO1.txt");
    const parser = new Hl7Parser(sampleFilePath);
    const message = parser.parse();
    const base64String = message.get(OBXMapper.data).toString();
    fs.writeFileSync(`reports/${new Date().getTime()}-ADT_AO1.pdf`, base64String, 'base64'); 
}

module.exports =  reportExtraction;