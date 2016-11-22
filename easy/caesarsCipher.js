function rot13(str) { // LBH QVQ VG!
  var re = "";
  for (var i = 0; i <str.length;i++){
    //想的是把不是字符的去掉，比如用正则，但不如这个if的方法好，老王想的，厉害
    if (str.charCodeAt(i)>=65&&str.charCodeAt(i)<=90){
      if ((str.charCodeAt(i)-13)<65){
              re += String.fromCharCode(str.charCodeAt(i)+13);
      }else{
        re += String.fromCharCode(str.charCodeAt(i)-13);
           }
    }
    else{
      re+=str.charAt(i);
    }   
  }
  return re;
}

// Change the inputs below to test
rot13("SERR CVMMN!");

//tips：这个题有彩蛋，// LBH QVQ VG! FCC每个题都会给一段鼓励的话，这个题的鼓励的话要做出这个题之后揭秘出来，哈哈，萌