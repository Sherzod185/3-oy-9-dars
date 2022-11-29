let arr=[1,2,3,-6,78,-6]
function invert(array) {
  return array.map(e=>-e);
}
console.log(invert(arr));