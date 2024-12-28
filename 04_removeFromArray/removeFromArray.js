const removeFromArray = function() {
    let array = arguments[0];

    let removalElements = [];
    for (let i = 1; i < arguments.length; i++) {
        removalElements.push(arguments[i])
    }
    let returnArray = []
    console.log(array);
    console.log(removalElements);

    outerLoop:
    for (let i = 0; i < array.length; i++) {
        for (element of removalElements) {
            if (array[i] === element) continue outerLoop;
        }
        returnArray.push(array[i]);
    }
    console.log(returnArray)
    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
