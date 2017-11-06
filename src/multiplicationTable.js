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
  multiArray.unshift(array);
  return multiArray;
};

MultiplicationTable.prototype.tabulate = function(array) {
  var multiArray = this.calculate(array);
  var length = array.length+1;
  for(var i = 0; i < length; i++){
    if(i === 0) {
      multiArray[0].unshift('-');
    } else {
      multiArray[i].unshift(multiArray[0][i]);
    }
  }
  return multiArray;
};

module.exports.MultiplicationTable = MultiplicationTable;
