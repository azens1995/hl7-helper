function withOnlyAttrs(mapObj, attrs) {
  const result = {};
  mapObj.forEach((value, key) => {
    if (attrs.includes(key)) {
      result[key] = value;
    }
  });

  return result;
}

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
