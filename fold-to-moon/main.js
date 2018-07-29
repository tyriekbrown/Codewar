function foldTo(distance){
  var counter = 0;
  if(distance <= 0){return null}
  for(var i = .0001; i < distance; i+=i){
    // i += i;
    counter +=1;
  }
  return counter;
}
foldTo(384000000)
