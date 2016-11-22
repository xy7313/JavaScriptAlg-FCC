//一遍过的代码，然而题目好像并不是想让这么算的
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var j = target.length-1;
  for(var i = str.length-1;i>0;i--){
    if (target[j]==str[i]){  
      if (j==0){
        return true;
      }
    }
          j--;
  }
  return false;
}


//这个可能才是出题者想要的答案吧
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
 if(str.substr(str.length-target.length,str.length-1)==target){
   return true;
 }
  return false;
}

confirmEnding("Bastian", "n");
