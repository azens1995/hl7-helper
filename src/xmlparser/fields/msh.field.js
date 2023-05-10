const {
  SENDER_APPLICATION,
  SENDER_APPLICATION_NAMESPACE_ID,
  SENDER_APPLICATION_UNIVERSAL_ID,
  SENDER_APPLICATION_UNIVERSAL_ID_TYPE,
  SENDER_FACILITY,
  SENDER_FACILITY_NAMESPACE_ID,
  SENDER_FACILITY_UNIVERSAL_ID,
  SENDER_FACILITY_UNIVERSAL_ID_TYPE,
  SENDER_DATE,
  MESSAGE_TYPE,
  MESSAGE_TYPE_CODE,
  MESSAGE_TYPE_TRIGGER_EVENT,
  SENDER_DATE_TIME,
} = require("../constants/msh.constant");

module.exports = {
  senderApplication: {
    field: SENDER_APPLICATION,
    subfields: {
      namespaceId: SENDER_APPLICATION_NAMESPACE_ID,
      universalId: SENDER_APPLICATION_UNIVERSAL_ID,
      universalIdType: SENDER_APPLICATION_UNIVERSAL_ID_TYPE,
    },
  },
  senderFacility: {
    field: SENDER_FACILITY,
    subfields: {
      namespaceId: SENDER_FACILITY_NAMESPACE_ID,
      universalId: SENDER_FACILITY_UNIVERSAL_ID,
      universalIdType: SENDER_FACILITY_UNIVERSAL_ID_TYPE,
    },
  },
  senderDate: {
    field: SENDER_DATE,
    subfields: {
      time: SENDER_DATE_TIME,
    },
  },
  messageType: {
    field: MESSAGE_TYPE,
    subfields: {
      messageCode: MESSAGE_TYPE_CODE,
      triggerEvent: MESSAGE_TYPE_TRIGGER_EVENT,
    },
  },
};
