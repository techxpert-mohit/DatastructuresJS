function bubbleSort(arr) {
  let noSwaps
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j <i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp =arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        noSwaps = false
      }
    }
    if(noSwaps) break;
  }
  return arr
}

// console.log(bubbleSort([37,45,29,8,12,88,-3]))
//console.log(bubbleSort([8,1,2,3,4,5,6,7,8,9]))