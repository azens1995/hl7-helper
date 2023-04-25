const path = require('path');
const Hl7Parser = require("./utils/parser");

// function parseUsingRedoxHl7() {
//     const sampleFilePath = path.join(__dirname, "./../../Hl7Samples/ADT_AO1.txt");
//     const parser = new Hl7Parser(sampleFilePath);
//     const decodedMessage = parser.parseUsingRedoxHl7();
//     const mshInfo = mapMSH(decodedMessage.MSH);
//     const patientInfo = mapPID(decodedMessage.PID)
//     console.log(JSON.stringify(decodedMessage, null, 2))
//     return decodedMessage

//     //save patient and message information
//     //await Patient.create(patientInfo)
//     //await Information.create(messageHeaderInfo)
// }

function parseHl7() {
    const sampleFilePath = path.join(__dirname, "./../../Hl7Samples/ADT_AO1.txt");
    const parser = new Hl7Parser(sampleFilePath);
    const decodedMessage = parser.parse();
    const patientInfo = mapPatientResponseInfo(decodedMessage.pid);
    const messageHeaderInfo = mapMessageHeaderInfo(decodedMessage.msh);
    console.log(JSON.stringify(decodedMessage, null, 2))
    return decodedMessage;

    //save patient and message information
    //await Patient.create(patientInfo)
    //await Information.create(messageHeaderInfo)
}

function mapMSH(mshMessageData) {
    return {
        senderApplication: mshMessageData[3][1],
        senderFacility: mshMessageData[4][1],
        senderDate: mshMessageData[7][1],
        messageType: mshMessageData[9][1]
    }
}

function mapPID(pidMessageData) {
    return {
        fullName: pidMessageData[5][0][2] +  pidMessageData[5][0][1][1],
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
        maritalStatus:  pidMessageData[16][1],
        sex:  pidMessageData[8],
        ssnNumber:  pidMessageData[19]
    }
}

function mapMessageHeaderInfo(messageHeaderData) {
    const {
        senderApplication,
        senderFacility,
        senderDate,
        messageType
    } = messageHeaderData;
    return {
        senderApplication,
        senderFacility,
        senderDate,
        messageType
    }
}
function mapPatientResponseInfo(patientInfo) {
    const {
        firstName,
        lastName,
        doBirth,
        phoneNumber,
        email,
        patientId,
        mrnNumber,
        street,
        city,
        state,
        maritalStatus,
        sex,
        ssnNumber
    } = patientInfo;
    return {
        fullName: firstName + lastName,
        doBirth,
        phoneNumber,
        email,
        patientId,
        mrnNumber,
        address: {
            street,
            city,
            state
        },
        maritalStatus,
        sex,
        ssnNumber
    }
}

module.exports = parseHl7

