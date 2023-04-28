const {
  ROOM,
  BED_STATUS,
  PATIENT_CLASS,
  POINT_OF_CARE,
  PATIENT_VISIT_ID,
  HOSPITAL_SERVICE,
  ASSIGNED_PATIENT_LOCATION,
} = require("../constants/patientVisit");
const { PATIENT } = require("../models/patient.model");

const PV1_SEGMENT = {
  [PATIENT_VISIT_ID]: PATIENT.patientVisitId,
  [PATIENT_CLASS]: PATIENT.patientClass,
  [ASSIGNED_PATIENT_LOCATION]: {
    [POINT_OF_CARE]: PATIENT.assignedPatientLocation.pointOfCare,
    [ROOM]: PATIENT.assignedPatientLocation.room,
  },
  [BED_STATUS]: PATIENT.bedStatus,
  [HOSPITAL_SERVICE]: PATIENT.hospitalService,
};

module.exports = { PV1_SEGMENT };
