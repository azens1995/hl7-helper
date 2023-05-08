/*
 TODO: Get patient information from database.
 For now, the data is being mocked and used.
*/
const PATIENT = {
  patientId: "1",
  firstName: "Chris",
  lastName: "Evans",
  nameTypeCode: "B", //birth name
  identifierList: {
    id: "1",
    idTypeCode: "ANON", //Anonymous identifier,
  },
  dob: "1997-09-16",
  dot: "00:47:31",
  phoneNumber: "415 555-7212",
  maritalStatus: "B", //unmarried
  sex: "M",
  address: {
    city: "San Franscisco",
    country: "California",
  },
  patientVisitId: "1",
  patientClass: "U", //unknown
  assignedPatientLocation: {
    pointOfCare: "XP-3",
    room: "BETA",
  },
  bedStatus: "O", //occupied
  hospitalService: "MED", //Medical service
};

module.exports = { PATIENT };
