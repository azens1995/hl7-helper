const store = require("./utils/store");
const exportReport = require("./utils/exportReport");
const Hl7MessageFactory = require("./factory/Hl7factory");
const messageType = require("./constant/messageType.constant");

const Hl7factory = new Hl7MessageFactory();
const adtA01Message = Hl7factory.getMessage(messageType.ADT_A01);
const oruR01Message = Hl7factory.getMessage(messageType.ORU_R01);
store.set(messageType.ADT_A01, adtA01Message);
store.set(messageType.ORU_R01, oruR01Message);
console.log("ADT_AO1", adtA01Message);
console.log("ORU_R01", oruR01Message);
exportReport();
