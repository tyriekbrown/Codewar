function revrot(str, sz) {
    var output = "";
    if(sz === 0){
      return "";
    }
    for(var i = 0; i < str.length; i += sz){
      if(str.length - i < sz){
        break;
      }
      var chunk = createChunk(str.slice(i, i + sz));
      var sumDivisible = chunkCheck(chunk);
      output += sumDivisible ? reverseChunk(chunk) : rotateChunk(chunk);
    }
    return output;
}

function createChunk(string){
  var chunk = "";
  for(var i = 0; i < string.length; i++){
    chunk += string[i];
  }
  return chunk;
}

function chunkCheck(chunk){
  var sum = 0;
  for(var i = 0; i < chunk.length; i++){
    sum += Math.pow(parseInt(chunk[i]), 3);
  }
  return sum % 2 === 0 ? true : false;
}

function reverseChunk(chunk){
  var output = "";
  for(var i = chunk.length - 1; i >= 0; i--){
    output += chunk[i];
  }
  return output;
}

function rotateChunk(chunk){
  var output = chunk.split("");
  var rotatedNum = output.shift();
  output.push(rotatedNum);
  return output.join("");
}

revrot("563000655734469485", 4)
