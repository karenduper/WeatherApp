var i = console.time("mergeSort.js")

var arrayRandom = []
var N= 1000000

for (var i = 0; i <= N; i++) {

  var randomnumber = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
  arrayRandom.push(randomnumber);
}


function merge(left, right){
  var result  = [],
    il      = 0,
    ir      = 0;

  while (il < left.length && ir < right.length){
    if (left[il] < right[ir]){
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }

  return result.concat(left.slice(il)).concat(right.slice(ir));
}


function mergeSort(items){

  // Terminal case: 0 or 1 item arrays don't need sorting
  if (items.length < 2) {
    return items;
  }

  var middle = Math.floor(items.length / 2),
    left    = items.slice(0, middle),
    right   = items.slice(middle);

  return merge(mergeSort(left), mergeSort(right));

}

console.log(mergeSort(arrayRandom));

console.timeEnd('mergeSort.js');
