// Reference: https://hl7-definition.caristix.com/v2/HL7v2.5.1/Segments/SPM
const SPECIMEN_ID = 1;
const SPECIMEN_TYPE = 4;

const SPECIMEN = {
  ID: "1",
  TYPE: {
    ASPIRATE: "ASP",
    BONE: "BON",
  },
};

module.exports = { SPECIMEN, SPECIMEN_ID, SPECIMEN_TYPE };
