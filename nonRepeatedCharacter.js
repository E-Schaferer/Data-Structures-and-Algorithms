/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  if (string === '') {
    return null;
  }
  let stringArray = string.split('');
  let storage = {};
  for (let i = 0; i < stringArray.length; i++) {
    if (!storage[stringArray[i]]) {
      storage[stringArray[i]] = 1;
    } else {
      storage[stringArray[i]]++;
    }
  };
  for (let key in storage) {
    if (storage[key] === 1) {
      return key;
    }
  };
};