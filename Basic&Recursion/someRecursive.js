function someRecursive(arr, callback) {
  if (arr.length === 0) return false;

  return callback(arr[0]) || someRecursive(arr.slice(1), callback)
}

const isOdd = val => val % 2 !== 0;
//console.log(someRecursive([1,2,3,4], isOdd))
//console.log(someRecursive([4,6,8,9], isOdd))
//console.log(someRecursive([4,6,8], isOdd))

//console.log(someRecursive([4,6,8], val => val > 4))