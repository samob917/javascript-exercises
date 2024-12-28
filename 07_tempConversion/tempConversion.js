const convertToCelsius = function(degF) {
  let degC = (5/9) * (degF-32);
  return Number(degC.toFixed(1));
};

const convertToFahrenheit = function(degC) {
  let degF = ((9/5) * degC) + 32;
  return Number(degF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
