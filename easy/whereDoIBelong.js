
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  arr.sort(function(a,b){
    return a-b;
  });
  console.log(arr);
  return arr.indexOf(num);
}

getIndexToIns([10, 20, 30, 40, 50], 30);