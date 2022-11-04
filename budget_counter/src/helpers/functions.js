export function countTotal(array) {
  const result = array.reduce((prev, cur) => {
    return (prev += +cur.value);
  }, 0);
  return result;
}

export function countMonthTotal(array, month) {
  let resultArr = [];
  for (const i in array) {
    for (const y of array[i].months) {
      if (y.name === month) {
        resultArr.push(y.value);
      }
    }
  }
  console.log(resultArr, 'resArr');
  const result = resultArr.reduce((prev, cur) => {
    return (prev += +cur);
  }, 0);
  return result;
}
