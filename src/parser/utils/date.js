function getCurrentDateInYYYYMMDD() {
  const date = new Date().toISOString();
  return date.split("T")[0];
}

module.exports = {
  getCurrentDateInYYYYMMDD,
};
