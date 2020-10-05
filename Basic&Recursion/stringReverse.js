function reverse(str) {
  if (str.length === 0) return str
  return str[str.length -1].concat(reverse(str.slice(0,-1)))
}

//console.log(reverse('rithmschool'))