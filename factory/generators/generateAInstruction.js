const decimalToBinary = require('../../utilities/decimalToBinary.js').default;

exports.default = function generateAInstruction(instruction) {
    let binary = [];

    binary = binary.concat([0]); // A instruction starts with 0

    let memoryAddress = instruction.substring(1);

    binary = binary.concat(decimalToBinary(memoryAddress, 15));

    return binary.join('');
}