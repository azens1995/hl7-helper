// Reference: https://hl7-definition.caristix.com/v2/HL7v2.5.1/Segments/PV1
const BED_STATUS = 40;
const PATIENT_CLASS = 2;
const PATIENT_VISIT_ID = 1;
const HOSPITAL_SERVICE = 10;
const ASSIGNED_PATIENT_LOCATION = 3;

// subfield
const ROOM = 2;
const POINT_OF_CARE = 1;

module.exports = {
  ROOM,
  BED_STATUS,
  POINT_OF_CARE,
  PATIENT_CLASS,
  HOSPITAL_SERVICE,
  PATIENT_VISIT_ID,
  ASSIGNED_PATIENT_LOCATION,
};
