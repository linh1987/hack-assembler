const fs = require('fs');

const fileName = process.argv[2];
const generateBinaryInstruction = require('./factory').default;

if (!fileName) {
    console.log("File must be supplied");
    return;
}

fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    const binFileName = fileName.replace('asm', 'hack');

    if (fs.existsSync(binFileName)) {
        fs.unlinkSync(binFileName);
    }

    fs.writeFile(binFileName, assemble(data));
});



function assemble(asm) {
    let binaries = [];

    const instructions = asm.split('\n');

    instructions.forEach(function (instruction) {
        binaries.push(generateBinaryInstruction(instruction));
    }, this);

    return binaries.join('\n');
}
