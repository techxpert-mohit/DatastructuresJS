function trib(nums) {
 if(mem[nums] !== undefined) return mem[nums]
  return mem[nums] = trib(nums -1) + trib(nums -2) + trib(nums -3)
}

const mem = {
  0: 0,
  1: 1,
  2:1
}

//console.log(trib(200))