/**
 * Common Utility Related Methods
 */
class Util {
  /**
   * Count letter
   * @param {string} str - given string
   * @param {string} char - given character
   * @return {number} count - no of characters
   * @example
   *      util.letterCount("test", "t");
   */
  letterCount(str, char) {
    let count = 0;
    for (let i = 0; i <= str.length; i += 1) {
      if (str[i] === char) {
        count += 1;
      }
    }

    return count;
  }
}

module.exports = Util;
