function findOdd(A) {
    var len = A.length;
    var A_sort = A.slice().sort();

    var count = {};

    A_sort.forEach(function(i) {
        count[i] = (count[i] || 0) + 1;
    });
/*  Note on the above code - creates the associative array object 'count' that will have a key-value pair for each unique element in the array, where the key is the unique element value and the value is the count. Then iterating over the array and for each value either increments the value or creates the key value pair (the value of the non-existent key evaluates to undefined so the || or operator takes a zero instead and adds the 1)*/
    for (var key in count) {
        if (count.hasOwnProperty(key)) {

            //  var value = count[key];
            if (count[key] % 2 !== 0) {
                return Number(key);
            }
        }
    }
}
console.log(findOdd([1, 1, 9, 2]));
