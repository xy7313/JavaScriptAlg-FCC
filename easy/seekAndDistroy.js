function destroyer(arr) {
  //固定方法，把arguments转成array
  var args = Array.prototype.slice.call(arguments);
  //从0开始，删除1个
  args.splice(0, 1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
/*
这里的题居然也要去抄答案了，伐开心。。
arguments这个东西不好用，用for遍历最后的2,3，不能用arguments[1]这种形式
*/
