As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).



let gimme = (inputArray) => {
  const sortArray = inputArray.slice().sort((a,b) => a - b);
  for (i in sortArray) {
    if (inputArray[i] === sortArray[1]) {
      return inputArray.indexOf(sortArray[1]);
    }
  }
};

gimme ([5, 10, 14]);
