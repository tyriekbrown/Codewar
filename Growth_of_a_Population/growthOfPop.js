function nbYear(p0, percent, aug, p) {
 //this will know where to start count
 var years = 0;
 //boolean for percent 0.02
  if ( percent < 10 ) {
    var percent = percent * .01
    //else if for if percent is greater(0.02) than 10 [percent(0.02) *.1]
  }else if ( percent >= 10 ) {
    var percent = percent * .1
  }
  for ( var i = p0; i < p; i += poplation ) {
    var poplation = Math.round(p0 * percent) + aug
    p0 += poplation
    years++
    }
  return years;
  }


console.log(nbYear(1000, 2, 50, 1200))
