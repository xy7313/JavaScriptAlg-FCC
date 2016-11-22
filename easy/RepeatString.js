
function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num<=0){
    return "";
  }
  var tmp = str;
  for(var i = 1;i<num;i++){
    str+=tmp;
    console.log(str);
  }
  return str;
}

repeatStringNumTimes("*", 3);
