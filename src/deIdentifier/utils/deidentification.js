const { getRandomValue } = require("./getRandomValue");
const { ADT_A01, ORU_R01 } = require("../constants/messageTypes");
const {
  getRandomSSN,
  getRandomCity,
  getRandomEmail,
  getRandomState,
  getRandomStreet,
  getRandomCountry,
  getRandomZipCode,
  getRandomLastName,
  getRandomDateTime,
  getRandomFirstName,
  getRandomCountryCode,
  getRandomPhoneNumber,
} = require("./randomGenerator");

const deIdentification = (message, messageType) => {
  let PID = {};

  switch (messageType) {
    case ADT_A01:
      PID = message.PID;
      break;
    case ORU_R01:
      PID = message.PATIENT_RESULT[0].PATIENT.PID;
      break;
  }

  // Replace original value with random value
  PID["5"][0]["2"] = getRandomFirstName(getRandomValue());

  if (PID["5"][0]["1"]) {
    PID["5"][0]["1"]["1"] = getRandomLastName(getRandomValue());
  }

  if (PID["13"]) {
    PID["13"][0]["4"] = getRandomEmail(getRandomValue());
    PID["13"][0]["5"] = getRandomCountryCode(getRandomValue());
    PID["13"][0]["1"] = getRandomPhoneNumber(getRandomValue()); // This can also be Fax number
  }

  if (PID["7"]) {
    PID["7"]["1"] = getRandomDateTime(getRandomValue());
  }

  if (PID["11"]) {
    PID["11"][0]["3"] = getRandomCity(getRandomValue());
    PID["11"][0]["4"] = getRandomState(getRandomValue());
    PID["11"][0]["6"] = getRandomCountry(getRandomValue());
    PID["11"][0]["5"] = getRandomZipCode(getRandomValue());
    PID["11"][0]["1"]["1"] = getRandomStreet(getRandomValue());
  }

  PID["19"] = getRandomSSN(getRandomValue());

  return message;
};

module.exports = { deIdentification };
