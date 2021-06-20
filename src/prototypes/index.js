/**
 * Imports all  prototypes
 */
const requirePrototypes = require.context('.', true, /\.js$/);
requirePrototypes.keys().forEach(fileName => {
  if (fileName !== './index.js') {
    requirePrototypes(fileName);
  }
});
