const {
  _DATE_TIME,
  EVENT_REQUEST_CODE,
  RECORDED_DATE_TIME,
} = require("../constants/eventType");
const { EVENT_MODEL } = require("../models/evn.model");

const EVN_SEGMENT = {
  [RECORDED_DATE_TIME]: {
    [_DATE_TIME]: EVENT_MODEL.DATE_TIME,
  },
  [EVENT_REQUEST_CODE]: EVENT_MODEL.EVENT_REQUEST_CODE,
};

module.exports = { EVN_SEGMENT };
