const { PID } = require("../constant/app.constant");

function oruR01Message(data) {
  const messageHeaderInfo = data.MSH;
  const patientInfo = data[PID.PATIENT_RESULT][0][PID.PATIENT][PID.PID_INFO];
  const orderObservationInfo =
    data[PID.PATIENT_RESULT][0][PID.ORDER_OBSERVATION][0][PID.OBSERVATION];
  const messageHeader = mapMSH(messageHeaderInfo);
  const patient = mapPID(patientInfo);
  const observation = mapOrderObservation(orderObservationInfo);
  return {
    messageHeader,
    patient,
    observation,
  };
}

function mapMSH(mshMessageData) {
  return {
    senderApplication: mshMessageData[3][1],
    senderFacility: mshMessageData[4][1],
    senderDate: mshMessageData[7][1],
    messageType: mshMessageData[9][1] + "_" + mshMessageData[9][2],
  };
}

function mapPID(pidMessageData) {
  return {
    fullName: pidMessageData[5][0][2] + pidMessageData[5][0][1][1],
    doBirth: pidMessageData[7][1],
    patientId: pidMessageData[3][0][1],
    mrnNumber: pidMessageData[3][0][5],
    address: {
      street: pidMessageData[11][0][1][1],
      city: pidMessageData[11][0][3],
      state: pidMessageData[11][0][4],
    },
    sex: pidMessageData[8],
  };
}

function mapOrderObservation(orderObservationData) {
  const observationData = [];
  orderObservationData.forEach((observation) => {
    const data = observation.OBX[5][0].split("^");
    observationData.push({
      encodingType: data[3],
      typeOfData: data[1],
      data: data[4],
      resultStatus: observation.OBX[11],
    });
  });
  return observationData;
}

module.exports = oruR01Message;
