/**
 *
 * @memberof String
 * @name toCapitalize
 * @returns {String} expression > Expression
 * @description Makes the first letter of a string uppercase
 */

String.prototype.toCapitalize = function() {
  const str = this;
  return str.charAt(0).toUpperCase() + str.slice(1);
};
