const store = require("./utils/store");
const exportReport = require("./utils/exportReport");
const Hl7MessageFactory = require("./factory/Hl7factory");
const messageType = require("./constant/messageType.constant");
const { getAdtA01Keys, getOruR01Keys } = require("./factory/hl7Keys");

//call api to retrieve required keys and store to global state for future uses during parsing.
store.set(messageType.ADT_A01, getAdtA01Keys());
store.set(messageType.ORU_R01, getOruR01Keys());
const Hl7factory = new Hl7MessageFactory();
const adtA01Message = Hl7factory.getMessage(messageType.ADT_A01);
const oruR01Message = Hl7factory.getMessage(messageType.ORU_R01);
console.log("ADT_AO1", adtA01Message);
console.log("ORU_R01", oruR01Message);
exportReport();
