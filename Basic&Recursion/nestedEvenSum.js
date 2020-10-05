function nestedEvenSum(obj) {
  sum = 0
  if(Array.isArray(obj)) {
    if (obj.length <= 0) return 0;
    sum += nestedEvenSum(obj[0]) + nestedEvenSum(obj.slice(1))
  } else if (typeof obj === "number") {
    obj%2===0 ? sum+=obj : sum+=0
  } else if (typeof obj === "object") {
    sum += nestedEvenSum(Object.values(obj))
  }
  return sum
}



var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

//console.log(nestedEvenSum(obj2))