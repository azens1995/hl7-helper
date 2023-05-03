const getRandomValue = () => {
  const min = 0;
  const max = 9;

  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
};

module.exports = { getRandomValue };
