function averagePair(nums, val) {
  let left = 0
  let right = nums.length -1
  while (left < right) {
    let avg = (nums[left] + nums[right])/2
    if (avg === val) {
      return true
    } else if (avg > val) {
      right--
    } else {
      left++
    }
  }
  return false
}

//console.log(averagePair([-1,0,3,4,5,6], 4.1))