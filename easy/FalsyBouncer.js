
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  return arr.filter(function(val){
    //新方法，是true就放进filt之后的结果里面
    return Boolean(val);
  });
}

bouncer([1, null, NaN, 2, undefined]);
