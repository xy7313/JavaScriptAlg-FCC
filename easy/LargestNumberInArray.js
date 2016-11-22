
function largestOfFour(arr) {
  var tmp = arr;
  for(var i = 0;i<tmp.length;i++){
    arr[i]=Math.max(...tmp[i]);
  }
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
