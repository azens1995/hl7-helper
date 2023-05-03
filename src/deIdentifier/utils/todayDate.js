const format = (digit) => {
  return digit > 9 ? "" + digit : "0" + digit;
};

const getDate = () => {
  const today = new Date();

  const year = format(today.getFullYear());
  const month = format(today.getMonth() + 1);
  const date = format(today.getDate());

  const todayDate = `${year}${month}${date}`;

  return todayDate;
};

module.exports = getDate;
