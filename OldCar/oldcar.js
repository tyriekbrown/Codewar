function bump(x) {
  var arr = x.split("");
  var bumps = 0;
  for ( var i = 0; i < arr.length; i++ ) {
    if ( arr[i]==="n" ) {
      bumps+=1
    }
  }
  if ( bumps>15 ) {
    return "Car Dead"
  } else {
   return "Woohoo!"
  }
}
