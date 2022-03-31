const sumArray = (array = []) =>
  array.reduce((prev, current) => prev + current, 0);
const sumArrayObject = (array = [], key = "") =>
  array.reduce((prev, current) => prev + current[key], 0);
const sumArrayObjectIndex = (array = [], index = 0) =>
  array.reduce((prev, current) => prev + Object.values(current)[index], 0);
module.exports = { sumArray, sumArrayObject, sumArrayObjectIndex };
