const {
  EVENT_CODE,
  _DATE_TIME,
  EVENT_TYPE_CODE,
  EVENT_REQUEST_CODE,
  RECORDED_DATE_TIME,
} = require("../constants/eventType");
const { getDateTime } = require("../utils/getCurrentDateTime");

const EVN_SEGMENT = {
  [RECORDED_DATE_TIME]: {
    [_DATE_TIME]: getDateTime(),
  },
  [EVENT_TYPE_CODE]: EVENT_CODE.PATIENT_VISIT,
  [EVENT_REQUEST_CODE]: EVENT_CODE.PATIENT_REQUEST,
};

module.exports = { EVN_SEGMENT };
