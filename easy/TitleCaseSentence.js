/*
https://www.freecodecamp.com/challenges/title-case-a-sentence#?solution=%0Afunction%20titleCase(str)%20%7B%0A%20%20var%20arr%20%3D%20str.toLowerCase().split('%20')%3B%0A%20%20for%20(var%20i%20%3D%200%3B%20i%20%3Carr.length%3Bi%2B%2B)%7B%0A%20%20%20arr%5Bi%5D%20%3D%20arr%5Bi%5D.charAt(0).toUpperCase()%2Barr%5Bi%5D.substring(1)%3B%0A%20%20%7D%0A%20%20return%20arr.join('%20')%3B%0A%7D%0A%0AtitleCase(%22I'm%20a%20little%20tea%20pot%22)%3B%0A
*/
function titleCase(str) {
  var arr = str.toLowerCase().split(' ');
  for (var i = 0; i <arr.length;i++){
   arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].substring(1);
  }
  return arr.join(' ');
}

titleCase("I'm a little tea pot");
