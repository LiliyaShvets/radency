const chooseOptimalDistance = (function () {
  let array = [];

  function chooseOptimalDistance(ls, k, start, index, current) {
    if (index === k) {
      array.push(current.slice());
      return;
    }
    for (let i = start; i < ls.length; i += 1) {
      current[index] = ls[i];
      chooseOptimalDistance(ls, k, i + 1, index + 1, current);
    }
  }

  return function (t, ls, k) {
    array = [];

    chooseOptimalDistance(ls, k, 0, 0, []);

    let newArray = array;
    array = null;

    const sumArray = newArray.reduce((a, b) => [...a, b.reduce((a, b) => a + b)], []);
    const optimalSum = Math.max(...sumArray.filter(item => item <= t));

    return optimalSum;    

  };
  
}());

console.log(chooseOptimalDistance(174, [51, 56, 58, 59, 61], 3));