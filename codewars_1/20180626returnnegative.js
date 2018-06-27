String.prototype.toJadenCase = function () {
    var returnString = [];
    var words = this.toLowerCase().split(' ');

    for (var i = 0; i < words.length; i++) {
        word = words[i];
        returnString.push(word[0].toUpperCase() + word.slice(1));
    }
    return returnString.join(" ");
};
