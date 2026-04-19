'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString.split(';').reduce((acc, item) => {
    const [key, value] = item.split(':').map((str) => str.trim());

    if (key && value) {
      acc[key] = value;
    }

    return acc;
  }, stylesObject);

  return stylesObject;
}

module.exports = convertToObject;
