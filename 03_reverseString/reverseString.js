const reverseString = function(string) {
    returnString = "";
    stringArray = string.split("");
    for (let i = stringArray.length - 1; i >= 0; i--) {
        returnString = returnString + stringArray[i];
    }
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
