function MultiplicationTable() {
}

MultiplicationTable.prototype.calculate = function(array) {
  var multiArray = [];
  var tableSize = array.length;
  for(var i = 0; i < tableSize; i++){
    multiArray[i] = [];
    for(j = 0; j < tableSize; j++){
      multiArray[i][j] = (array[j]) * (array[i]);
    }
  }
  multiArray.unshift(array)
  return multiArray;
};

module.exports.MultiplicationTable = MultiplicationTable;
