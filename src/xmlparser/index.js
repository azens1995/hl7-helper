const path = require("path");
const store = require("./utils/store");
const parse = require("./utils/parser");
const { getAdtA01Keys } = require("./factory/hl7Keys");
const { ADT_A01 } = require("./constants/messageType.constant");

/**
 * The `store` object is used to store key-value pairs that can be accessed from anywhere in the code.
 * This is an API mocking to retrieve required fields for each type of message. The `getAdtA01Keys()`
 * functions are used to retrieve the required fields for ADT_A01 messages
 * respectively.
 */
//TODO: Call actual api to retrieve required keys and store to global state for future uses during parsing.
store.set(ADT_A01, getAdtA01Keys());

//Source file: https://documentation.softwareag.com/webmethods/adapters_estandards/eStandards/HL7/HL7_10-5/10-5_HL7_Module_webhelp/index.html#page/hl7-iug-onlinehelp%2Fto-converting_hl7_documents_6.html%23
const xmlFilePath = path.join(__dirname, "./source/ADT_A01.xml");
const message = parse(xmlFilePath);
console.log(message);
