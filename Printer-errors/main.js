let s = "aaaxbbbbyyhwawiwjjjwwm"
function printerError(string) {
  let aThruM = "abcdefghijklm"
  let errorCount = 0
  for(var i = 0;i<string.length;i++){
    //console.log(aThruM.indexOf(string[i]));
    if(aThruM.indexOf(string[i]) === -1){
     errorCount += 1;
    }
  }
  errorCount += "/" + string.length;
  return errorCount;
}

printerError(s)
