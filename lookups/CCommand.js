const a0lookupTable = {
    "0": [1,0,1,0,1,0],
    "1": [1,1,1,1,1,1],
    "-1": [1,1,1,0,1,0],
    "D": [0,0,1,1,0,0],
    "A": [1,1,0,0,0,0],
    "!D": [0,0,1,1,0,1],
    "!A": [1,1,0,0,0,1],
    "-D": [0,0,1,1,1,1],
    "-A": [1,1,0,0,1,1],
    "D+1": [0,1,1,1,1,1],
    "A+1": [1,1,0,1,1,1],
    "D-1": [0,0,1,1,1,0],
    "A-1": [1,1,0,0,1,0],
    "D+A": [0,0,0,0,1,0],
    "D-A": [0,1,0,0,1,1],
    "A-D": [0,0,0,1,1,1],
    "D&A": [0,0,0,0,0,0],
    "D|A": [0,1,0,1,0,1],
}

const a1lookupTable = {
    "M": [1,1,0,0,0,0],
    "!M": [1,1,0,0,0,1],
    "-M": [1,1,0,0,1,1],
    "M+1": [1,1,0,1,1,1],
    "M-1": [1,1,0,0,1,0],
    "D+M": [0,0,0,0,1,0],
    "D-M": [0,1,0,0,1,1],
    "M-D": [0,0,0,1,1,1],
    "D&M": [0,0,0,0,0,0],
    "D|M": [0,1,0,1,0,1],
}

exports.default = function CDestLookup(mnemonic) {
    const trimmedMnemonic = mnemonic.trim();

    if (a0lookupTable.hasOwnProperty(trimmedMnemonic)) {
        return [0].concat(a0lookupTable[trimmedMnemonic]);
    }
    else if (a1lookupTable.hasOwnProperty(trimmedMnemonic)) {
        return [1].concat(a1lookupTable[trimmedMnemonic]);
    } 

    throw "Unrecognize mnenomic: " + trimmedMnemonic;
}