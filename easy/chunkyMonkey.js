
function chunkArrayInGroups(arr, size) {
  var i =0;
  var len = arr.length;
  var re = [];
  while(len>0){
    //这里是arr.slice，string和array都有这个方法
    var slice =  arr.slice(i*size,size*(i+1));
    len-=size;
    i++;
    re.push(slice);
  }
  return re;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
