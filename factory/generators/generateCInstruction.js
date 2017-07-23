const CCommandLookup = require('../../lookups/CCommand.js').default;
const CDestLookup = require('../../lookups/CDest.js').default;
const CJumpLookup = require('../../lookups/CJump.js').default;


exports.default = function generateCIntruction(instruction) {
    let binary = [];

    binary = binary.concat([1, 1, 1]); // C instruction starts with 1 and two unused bits

    if (instruction.indexOf('=') != -1) {
        //normal instruction
        let comp = instruction.split('=')[1];
        let dest = instruction.split('=')[0];

        binary = binary.concat(CCommandLookup(comp));
        binary = binary.concat(CDestLookup(dest));
        binary = binary.concat([0,0,0]); //no jump

    } else if (instruction.indexOf(';') != -1) {
        //jump
        let jump = instruction.split(';')[1];
        let comp = instruction.split(';')[0];
        binary = binary.concat(CCommandLookup(comp));
        binary = binary.concat([0,0,0]); //no dest
        binary = binary.concat(CJumpLookup(jump));

    } else {
        //error
    }


    return binary.join('');
}