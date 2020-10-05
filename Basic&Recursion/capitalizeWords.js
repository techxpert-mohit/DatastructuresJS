function capitalizeWords(arr) {
  if(arr.length === 0) return arr
  const word = arr[0].toUpperCase()
  return [word].concat(capitalizeWords(arr.slice(1)))
}

let words = ['i', 'am', 'learning', 'recursion']

//console.log(capitalizeWords(words))