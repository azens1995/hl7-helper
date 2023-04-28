const {
  SPECIMEN_ID,
  SPECIMEN,
  SPECIMEN_TYPE,
} = require("../constants/specimen");

const SPM_SEGMENT = {
  [SPECIMEN_ID]: SPECIMEN.ID,
  [SPECIMEN_TYPE]: {
    1: SPECIMEN.TYPE.ASPIRATE,
  },
};

module.exports = { SPM_SEGMENT };
