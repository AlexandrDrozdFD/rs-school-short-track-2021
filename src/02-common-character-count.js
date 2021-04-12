/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrayOfChars1 = s1.split('');
  const arrayOfChars2 = s2.split('');

  const obj1 = arrayOfChars1.reduce((prev, char) => {
    const prevValue = prev;
    prevValue[char] = (prevValue[char] || 0) + 1;
    return prev;
  }, {});

  const obj2 = arrayOfChars2.reduce((prev, char) => {
    const prevValue = prev;
    prevValue[char] = (prevValue[char] || 0) + 1;
    return prev;
  }, {});
  let countOfCommonProps = 0;

  for (let key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      if (obj2[key] < obj1[key]) {
        countOfCommonProps += obj2[key];
      } else {
        countOfCommonProps += obj1[key];
      }
    }
  }

  return countOfCommonProps;
}

module.exports = getCommonCharacterCount;
