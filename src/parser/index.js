const path = require('path');
const Hl7Parser = require("./utils/parser");
const MSHMapper = require("./fields/msh.field");
const PIDMapper = require("./fields/pid.field");
const OBXMapper = require("./fields/obx.field")

function parseHl7() {
    const sampleFilePath = path.join(__dirname, "./../../Hl7Samples/ADT_AO1.txt");
    const parser = new Hl7Parser(sampleFilePath);
    const decodedMessage = parser.parse();
    const patientInfo = mapPIDMessage(decodedMessage);
    const messageHeaderInfo = mapMSHMessage(decodedMessage);
    const obxMessage = mapOBXMessage(decodedMessage)
    console.log(messageHeaderInfo, patientInfo, obxMessage)
    return {
        mshHeader: messageHeaderInfo,
        patientInfo,
        obxMessage
    };

    //save patient and message information
    //await Patient.create(patientInfo)
    //await Information.create(messageHeaderInfo)
}

function mapMSHMessage(mshMessage) {
    return {
        senderApplication: mshMessage.get(MSHMapper.senderApplication).toString(),
        senderFacility: mshMessage.get(MSHMapper.senderFacility).toString(),
        senderDate: mshMessage.get(MSHMapper.senderDate).toString(),
        messageType: mshMessage.get(MSHMapper.messageType).toString()
    }
}

function mapPIDMessage(pidMessage) {
    return {
        fullName: pidMessage.get(PIDMapper.firstName).toString() + pidMessage.get(PIDMapper.lastName).toString(),
        doBirth: pidMessage.get(PIDMapper.doBirth).toString(),
        phoneNumber: pidMessage.get(PIDMapper.phoneNumber).toString(),
        email: pidMessage.get(PIDMapper.email).toString(),
        patientId: pidMessage.get(PIDMapper.patientId).toString(),
        mrnNumber: pidMessage.get(PIDMapper.mrnNumber).toString(),
        address: {
            street: pidMessage.get(PIDMapper.street).toString(),
            city: pidMessage.get(PIDMapper.city).toString(),
            state: pidMessage.get(PIDMapper.state).toString(),
        },
        maritalStatus: pidMessage.get(PIDMapper.maritalStatus).toString(),
        sex: pidMessage.get(PIDMapper.sex).toString(),
        ssnNumber: pidMessage.get(PIDMapper.ssnNumber).toString()
    }
}

function mapOBXMessage(obxMessage) {
    return {
        encodingType: obxMessage.get(OBXMapper.encodingType).toString(),
        typeOfData: obxMessage.get(OBXMapper.typeOfData).toString(),
        data: obxMessage.get(OBXMapper.data).toString(),
        resultStatus: obxMessage.get(OBXMapper.resultStatus).toString(),
    }
}

parseHl7()