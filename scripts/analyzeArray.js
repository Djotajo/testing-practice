function analyzeArray(array) {
  let values = new Object();
  values.average = array.reduce((sum, next) => sum + next, 0) / array.length;
  values.min = Math.min(...array);
  values.max = Math.max(...array);
  values.length = array.length;
  return values;
}

module.exports = analyzeArray;
