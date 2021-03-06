function Utility() {}

/**
 *
 */
Utility.convertDecToHexString = function(num, width, noPrefix) {
  var str = num.toString(16);

  var prefix = "";

  if (num < 0) prefix += "-";

  if (noPrefix !== true) prefix += "0x";

  if (width === undefined) return prefix + str;

  var base = "";

  for (var i = 0; i < width; i++) base += "0";

  return prefix + (base + str).substr(-1 * width);
};

Utility.combinePlanes = function(first, second) {
  let result = [];

  for (let byte = 0; byte < 8; byte++) {
    let string = "";
    for (let bit = 0; bit < 8; bit++) {
      if (first[byte][bit] == 0 && second[byte][bit] == 0) {
        string += "0";
      } else if (first[byte][bit] == 1 && second[byte][bit] == 0) {
        string += "1";
      } else if (first[byte][bit] == 0 && second[byte][bit] == 1) {
        string += "2";
      } else if (first[byte][bit] == 1 && second[byte][bit] == 1) {
        string += "3";
      }
    }
    result.push(string);
  }
  return result;
};

export { Utility };
