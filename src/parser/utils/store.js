const store = new Map();

module.exports = {
  get: function get(key) {
    return store.get(key);
  },
  set: function set(key, value) {
    return store.set(key, value);
  },
  hasKey: function hasKey(key) {
    return store.has(key);
  },
  remove: function remove(key) {
    return store.delete(key);
  },

  deleteAll: function deleteAll() {
    return store.clear();
  },
};
