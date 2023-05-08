const getRandomString = () => {
  const min = 1000;
  const max = 10000;

  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum.toString();
};

module.exports = { getRandomString };
