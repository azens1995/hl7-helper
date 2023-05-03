const {
  SSN,
  EMAILS,
  STREETS,
  ZIP_CODES,
  CITY_LIST,
  LAST_NAMES,
  FIRST_NAMES,
  PHONENUMBER,
  COUNTRYCODE,
  STATES_LIST,
  COUNTRY_LIST,
  DATETIME_LIST,
} = require("../constants/randomValues");

const getRandomFirstName = (pos) => {
  return FIRST_NAMES[pos];
};

const getRandomLastName = (pos) => {
  return LAST_NAMES[pos];
};

const getRandomDateTime = (pos) => {
  return DATETIME_LIST[pos];
};

const getRandomPhoneNumber = (pos) => {
  return PHONENUMBER[pos];
};

const getRandomCountry = (pos) => {
  return COUNTRY_LIST[pos];
};

const getRandomCity = (pos) => {
  return CITY_LIST[pos];
};

const getRandomCountryCode = (pos) => {
  return COUNTRYCODE[pos];
};

const getRandomEmail = (pos) => {
  return EMAILS[pos];
};

const getRandomState = (pos) => {
  return STATES_LIST[pos];
};

const getRandomZipCode = (pos) => {
  return ZIP_CODES[pos];
};

const getRandomStreet = (pos) => {
  return STREETS[pos];
};

const getRandomSSN = (pos) => {
  return SSN[pos];
};

module.exports = {
  getRandomSSN,
  getRandomCity,
  getRandomEmail,
  getRandomState,
  getRandomStreet,
  getRandomCountry,
  getRandomZipCode,
  getRandomDateTime,
  getRandomLastName,
  getRandomFirstName,
  getRandomCountryCode,
  getRandomPhoneNumber,
};
