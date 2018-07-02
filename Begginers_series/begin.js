function GetSum(a,b){

  var sum = 0;
  if(a === b){
    return a;
  } else if(a < b){
    for(a; a <= b; a++){
      sum += a;
    }
  } else if(b < a){
    for(b; b <= a; b++){
      sum += b;
    }
  }
  return sum;
}

GetSum(0,-1);
