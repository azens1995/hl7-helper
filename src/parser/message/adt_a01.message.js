function adtA01Message(data) {
  const messageHeaderInfo = data.MSH;
  const patientInfo = data.PID;
  const messageHeader = mapMSH(messageHeaderInfo);
  const patient = mapPID(patientInfo);
  return {
    messageHeader,
    patient,
  };
}

function mapMSH(mshMessageData) {
  return {
    senderApplication: mshMessageData[3][1],
    senderFacility: mshMessageData[4][1],
    senderDate: mshMessageData[7][1],
    messageType: mshMessageData[9][1],
  };
}

function mapPID(pidMessageData) {
  return {
    fullName: pidMessageData[5][0][2] + pidMessageData[5][0][1][1],
    doBirth: pidMessageData[7][1],
    phoneNumber: pidMessageData[13][0][1],
    email: pidMessageData[13][0][4],
    patientId: pidMessageData[3][0][1],
    mrnNumber: pidMessageData[3][0][5],
    address: {
      street: pidMessageData[11][0][1][1],
      city: pidMessageData[11][0][3],
      state: pidMessageData[11][0][4],
    },
    maritalStatus: pidMessageData[16][1],
    sex: pidMessageData[8],
    ssnNumber: pidMessageData[19],
  };
}

module.exports = adtA01Message;
