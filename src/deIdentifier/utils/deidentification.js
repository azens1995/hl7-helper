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
  const randomValue = getRandomValue();

  PID["5"][0]["2"] = getRandomFirstName(randomValue);

  if (PID["5"][0]["1"]) {
    PID["5"][0]["1"]["1"] = getRandomLastName(randomValue);
  }

  if (PID["13"]) {
    PID["13"][0]["4"] = getRandomEmail(randomValue);
    PID["13"][0]["5"] = getRandomCountryCode(randomValue);
    PID["13"][0]["1"] = getRandomPhoneNumber(randomValue); // This can also be Fax number
  }

  if (PID["7"]) {
    PID["7"]["1"] = getRandomDateTime(randomValue);
  }

  if (PID["11"]) {
    PID["11"][0]["3"] = getRandomCity(randomValue);
    PID["11"][0]["4"] = getRandomState(randomValue);
    PID["11"][0]["6"] = getRandomCountry(randomValue);
    PID["11"][0]["5"] = getRandomZipCode(randomValue);
    PID["11"][0]["1"]["1"] = getRandomStreet(randomValue);
  }

  PID["19"] = getRandomSSN(randomValue);

  return message;
};

module.exports = { deIdentification };
