function longestConsec(strarr, k) {
    let resultsArr = [];
    let startCat = 0;
    let endCat = k-1;
    let result;

    //if the integer is 1, then point our results array at the strarr array and move on
    if (k === 1) {
    	resultsArr = strarr;
    }
    //else concatenate each set of k strings and push them into our results array
    else {
	    while (endCat < strarr.length) {
	    	let midCatCount = startCat + 1;
	    	let midCatVal = "";
	    	while (midCatCount < endCat) {
	    		midCatVal += strarr[midCatCount];
	    		midCatCount++;
	    	}
	    	resultsArr.push(strarr[startCat] + midCatVal + strarr[endCat])
	    	startCat++;
	    	endCat++;
	    }
    }


    // declare a variable to hold the index of the longest string and compare the lengths of all strings in our results array with each other
    let longStr = 0;
    for (let i=0; i<resultsArr.length; i++) {
    	if (resultsArr[longStr].length < resultsArr[i].length) {
    		longStr = i;
    	}
    }

    //if the length of the initial array is 0, or k is larger than the initial array, or k <= 0, then return an emtpy string

    if (strarr.length === 0 || k > strarr.length || k <= 0) {
    	result = "";
    }
    //else return the longest string from our results array
    else {
    	result = resultsArr[longStr];
    }

    return result;
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)



/* ---------------------------ADVANCED ALTERNATE SOLUTION ------------*/

function longestConsec(strarr, k) {
    let longest = "";
    for(let i=0;k>0 && i<=strarr.length-k;i++){
      let tempArray = strarr.slice(i,i+k);
      let tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
}
