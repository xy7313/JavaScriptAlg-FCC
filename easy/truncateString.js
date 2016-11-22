
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (num>=str.length){
    return str;
  }else if(num>=3){
  return str.substr(0,num-3)+"...";
}else{
  return str.substr(0,num)+"...";
}
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
