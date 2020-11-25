module.exports.genRandNum = (num) => {
  return Math.floor(1000 + Math.random() * 9 * 10 ** (num - 1));
};
