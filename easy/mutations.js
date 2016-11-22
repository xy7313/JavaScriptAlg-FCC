
function mutation(arr) {
  var str = arr[0].toLowerCase();
  for(var i = 0; i <arr[1].length;i++){
    if (str.indexOf(arr[1].toLowerCase().charAt(i))<0){
      return false;
    }
  }
  return  true;
}

mutation(["hello", "Hello"]);
