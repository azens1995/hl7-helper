const store = new Map();

module.exports = {
  get: (key) => {
    return store.get(key);
  },
  set: (key, value) => {
    return store.set(key, value);
  },
  hasKey: (key) => {
    return store.has(key);
  },
  remove: (key) => {
    return store.delete(key);
  },

  deleteAll: () => {
    return store.clear();
  },
};
