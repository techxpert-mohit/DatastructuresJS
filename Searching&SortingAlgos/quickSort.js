function quickSort(arr, left = 0, right = arr.length - 1) {
  if(left < right) {
    let pivotIndex = pivot(arr, left, right)
    //left
    quickSort(arr, left, pivotIndex - 1)
     //right
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}

function pivot(arr, start=0, end=arr.length+1) {
  function swap(array, i, j) {
    let temp =array[i]
    array[i] = array[j]
    array[j] = temp
  }
  var pivot = arr[start]
  var swapIdx = start

  for (var i = start + 1; i < arr.length; i++) {
    if(pivot > arr[i]){
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
}

//console.log(quickSort([4,8,2,1,5,7,6,3]))