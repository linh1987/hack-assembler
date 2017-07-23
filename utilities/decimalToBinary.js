

exports.default = function decimalToBinary(decimalValue, maxLength) {
  let lookupTable = buildLookupTable(decimalValue, maxLength);
  let binaryArray = [];
  var remain = decimalValue;
  while(lookupTable.length > 0) {
    const currentLookup = lookupTable.pop();
    binaryArray.push(currentLookup <= remain ? 1 : 0)
    if (currentLookup <= remain) {
      remain -= currentLookup;
    }
  }
  
  return binaryArray;
}


function buildLookupTable(decimalValue, maxLength) {
  let lookupTable = [];
  var currentBinaryPos = 0;
  while (lookupTable.length < maxLength) {
    lookupTable.push(Math.pow(2, currentBinaryPos));
    currentBinaryPos++;
  }
  
  return lookupTable;
}