/*For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

*/
function factorialize(num) {
  if(num===0){
    return 1;
  }
  var tmp=num;
  //for循环这里注意，第一次已经乘过5了，所以是5*1*2*3*4
  for(var i = 1;i<tmp;i++){
    num=num*i;
  }
  return num;
}

factorialize(5);
