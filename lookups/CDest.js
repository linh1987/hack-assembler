const lookupTable = {
    M: [0,0,1],
    D: [0,1,0],
    MD: [0,1,1],
    A: [1,0,0],
    AM: [1,0,1],
    AD: [1,1,0],
    AMD: [1,1,1]
}

exports.default = function CJumpLookup(mnemonic) {
    const trimmedMnemonic = mnemonic.trim();
    if (lookupTable.hasOwnProperty(trimmedMnemonic)) {
        return lookupTable[trimmedMnemonic];
    }

    return [0,0,0];
}