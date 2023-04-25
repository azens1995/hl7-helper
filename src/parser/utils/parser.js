const fs = require('fs');
var hl7parser = require("hl7parser");

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
        const decodedMessage = hl7parser.create(hl7Message.replace(/\n/g, "\r"));
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