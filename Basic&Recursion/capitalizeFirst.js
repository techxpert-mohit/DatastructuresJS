function capitalizeFirst(arr) {
  if(arr.length === 0) return arr
  else {
    const char = arr[0][0].toUpperCase()
    const word = char + arr[0].substring(1)
    return [word].concat(capitalizeFirst(arr.slice(1)))
  }
}

let arr = ['car','taco','banana']

//console.log(capitalizeFirst(arr))