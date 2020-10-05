function isPalindrome(str) {
  if (str.length===0) return true

  if(str.charAt(0) !== str.charAt(str.length - 1)) return false

  return isPalindrome(str.slice(1, str.length - 1))
}

//console.log(isPalindrome('foobar'))