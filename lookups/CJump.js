const lookupTable = {
    JGT: [0,0,1],
    JEQ: [0,1,0],
    JGE: [0,1,1],
    JLT: [1,0,0],
    JNE: [1,0,1],
    JLE: [1,1,0],
    JMP: [1,1,1]
}

exports.default = function CJumpLookup(mnemonic) {
    const trimmedMnemonic = mnemonic.trim();
    if (lookupTable.hasOwnProperty(trimmedMnemonic)) {
        return lookupTable[trimmedMnemonic];
    } else if (!trimmedMnemonic) {
        return [0,0,0];
    }

    throw "Unrecognize mnenomic: " + trimmedMnemonic;
}