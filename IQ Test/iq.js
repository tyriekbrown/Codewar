function iqTest(numbers) {
  var array = numbers.split(' ');
  var oddNum = [];
  var evenNum = [];
  for(var i = 0; i < array.length; i++) {
    if(array[i] % 2) {
      oddNum.push(i + 1);
    } else {
      evenNum.push(i + 1);
    }
  }
  if(oddNum.length === 1) {
    return oddNum[0];
  } else {
    return evenNum[0];
  }
}

iqTest("2 4 7 8 10") // => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") // => 2 // Second number is even, while the rest of the numbers
