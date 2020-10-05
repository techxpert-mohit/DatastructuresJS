function validAnagram(str1, str2){
  if (str1.length !== str2.length) {
    return false
  }
  let ana1 = {}
  let ana2 = {}
  for (let i =0; i< str1.length; i++) {
    ana1[str1[i]] = (ana1[str1[i]] || 0) + 1
  }
  for (let i = 0; i<str2.length; i++) {
    ana2[str2[i]] = (ana2[str2[i]] || 0) + 1
  }
  for(let key in ana1) {
    if(!(key in ana2)) {
      return false
    }
    if(ana2[key] !== ana1[key]) {
      return false
    }
  }
  return true
}

//console.log(validAnagram('aaz','zza'))