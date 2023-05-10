/**
 * Filters an object by only including the specified attributes.
 *
 * @param {Object} mapObj - The `mapObj` parameter is expected to be a Map object, which is a collection of
 * key-value pairs where both the keys and values can be of any type.
 * @param attrs - attributes that should be included in the resulting object.
 * @returns {object}
 */
function withOnlyAttrs(mapObj, attrs) {
  const result = {};
  mapObj.forEach((value, key) => {
    if (attrs.includes(key)) {
      result[key] = value;
    }
  });

  return result;
}

/**
 * Removes specified attributes from a given object and returns the updated object.
 *
 * @param {object} mapObj - The `mapObj` parameter is expected to be a Map object, which is a collection of
 * key-value pairs where both the keys and values can be of any type.
 * @param attrs - attributes that should
 * be excluded from the `mapObj`.
 * @returns {object}
 */
function withoutAttrs(mapObj, attrs) {
  const result = {};
  mapObj.forEach((value, key) => {
    if (!attrs.includes(key)) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = {
  withOnlyAttrs,
  withoutAttrs,
};
