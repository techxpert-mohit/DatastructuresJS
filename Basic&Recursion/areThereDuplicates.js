function areThereDuplicates() {
  let collection ={}
  for (let i = 0; i < arguments.length; i++) {
      collection[arguments[i]] = (collection[arguments[i]] || 0) + 1
  }
  console.log(collection)
  for(let key in collection) {
    if(collection[key] > 1) {
      return true
    }
  }
  return false
}

//console.log(areThereDuplicates(1,2,2))