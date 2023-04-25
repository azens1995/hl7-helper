const fs = require('fs');
const hl7v2 = require('@redoxengine/redox-hl7-v2');
const parser = require('@rimiti/hl7-object-parser');
const segmentMapping = require("./../segment.mapping.json")

class Hl7Parser {
    #filePath = null;

    constructor(filePath) {
        this.#filePath = filePath;
        
    }
    
    parse() {
        if(!this.#checkIfFileExist()) {
            throw new Error("FIle not found.")
        }
        
        const hl7Message = fs.readFileSync(this.#filePath, 'utf-8');
        const decodedMessage = parser.decode(hl7Message.replace(/\n/g, "\r"), segmentMapping);
        return decodedMessage;
    }

    parseUsingRedoxHl7() {
        if(!this.#checkIfFileExist()) {
            throw new Error("FIle not found.")
        }
        
        const hl7Message = fs.readFileSync(this.#filePath, 'utf-8');
        const parser = new hl7v2.Parser();
        const decodedMessage = parser.parse(hl7Message);
        return decodedMessage;
    }

    #checkIfFileExist() {
        if(!this.#filePath) {
            return false
        }

        return fs.existsSync(this.#filePath)
    }
}

module.exports = Hl7Parser;