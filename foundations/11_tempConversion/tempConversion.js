const convertToCelsius = function(t) {
  // xc = x-32) * 5/9
  let r =(t-32) * (5/9);
  r = r.toFixed(1)
  return Number(r);
  
};

const convertToFahrenheit = function(t) {
  //  x f = x* 9/5 +32
  let r= (t * (9/5)) + 32;
  r = r.toFixed(1)
  return Number(r) ;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
