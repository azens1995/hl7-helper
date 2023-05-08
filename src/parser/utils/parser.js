const fs = require("fs");
const hl7v2 = require("@redoxengine/redox-hl7-v2");

/**
 * Util class that parses HL7 messages from a specific file path.
 *
 */
class Hl7Parser {
  #filePath = null;

  constructor(filePath) {
    this.#filePath = filePath;
  }

  parse() {
    if (!this.#checkIfFileExist()) {
      throw new Error("File not found.");
    }

    const hl7Message = fs.readFileSync(this.#filePath, "utf-8");
    const parser = new hl7v2.Parser();
    const decodedMessage = parser.parse(hl7Message);
    return decodedMessage;
  }

  #checkIfFileExist() {
    if (!this.#filePath) {
      return false;
    }

    return fs.existsSync(this.#filePath);
  }
}

module.exports = Hl7Parser;
