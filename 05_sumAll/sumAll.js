const sumAll = function(numA, numB) {

    if (typeof numA !== "number" || typeof numB !== "number");
    let startNum = numA < numB ? numA : numB;
    let endNum = numA >= numB ? numA : numB;
    let sum = 0;
    if (startNum < 0) return "ERROR";
    if (Math.floor(startNum) !== startNum || Math.floor(endNum) !== endNum) return "ERROR";

    for (let i = startNum; i <= endNum; i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
