
function maximumDepth(arr) {
  let depth = 0;
  let x = 1;
  let n = arr.length;
  let twoPower = 1;
  for(let i = 1; n >= x; i++) {
      depth = i;
      twoPower = twoPower*2;
      x = x + twoPower;
  }
  return depth;
}

let arr = [3,9,20,null,null,15,7]
console.log(maximumDepth(arr));
