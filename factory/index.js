const generateAInstruction = require('./generators/generateAInstruction.js').default;
const generateCInstruction = require('./generators/generateCInstruction.js').default;

exports.default = function generateBinaryInstruction(instruction) {
    if (instruction.indexOf('@') === 0) {
        return generateAInstruction(instruction);
    } else if (instruction.indexOf(';') != -1 || instruction.indexOf("=") != -1) {
        return generateCInstruction(instruction);
    }

    throw "Unrecognized instruction: " + instruction;
}