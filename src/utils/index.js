/**
 * Imports all utilities
 */
const requireUtils = require.context('.', true, /\.js$/);
requireUtils.keys().forEach(fileName => {
  if (fileName !== './index.js') {
    requireUtils(fileName);
  }
});
