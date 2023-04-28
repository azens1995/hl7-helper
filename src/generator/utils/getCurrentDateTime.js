const format = (digit) => {
  return digit > 9 ? "" + digit : "0" + digit;
};

const getDateTime = () => {
  const today = new Date();

  const year = format(today.getFullYear());
  const month = format(today.getMonth() + 1);
  const date = format(today.getDate());
  const hour = format(today.getHours());
  const minutes = format(today.getMinutes());
  const second = format(today.getSeconds());

  const dateTime = year + month + date + hour + minutes + second;
  return dateTime;
};

module.exports = { getDateTime };
