/*
https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string#?solution=%0Afunction%20findLongestWord(str)%20%7B%0A%20%20var%20arr%20%3D%20str.split('%20')%3B%0A%20%20var%20length%20%3D%200%3B%0A%20%20for(var%20i%20%3D%200%3B%20i%3Carr.length%3Bi%2B%2B)%7B%0A%20%20%20%20var%20subArr%20%3D%20arr%5Bi%5D.split('')%3B%0A%20%20%20%20if%20(subArr.length%3Elength)%7B%0A%20%20%20%20%20%20length%20%3D%20subArr.length%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20return%20length%3B%0A%20%20%2F%2Freturn%20str.length%3B%0A%7D%0A%0AfindLongestWord(%22The%20quick%20brown%20fox%20jumped%20over%20the%20lazy%20dog%22)%3B%0A
*/
function findLongestWord(str) {
  var arr = str.split(' ');
  var length = 0;
  for(var i = 0; i<arr.length;i++){
    var subArr = arr[i].split('');
    if (subArr.length>length){
      length = subArr.length;
    }
  }
  return length;
  //return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
