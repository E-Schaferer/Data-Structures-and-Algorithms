/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array) {
  let arrayLess = [];
  let arrayMore = [];
  let pivot = []
  let pivotNum = array[Math.floor(Math.random() * array.length)];
  let counter = 0;
  let holder;
  for (let i = 0; i < array.length; i++) {
      if (array[i] < pivotNum) {
          arrayLess.push(array[i]);
      } else if (array[i] > pivotNum) {
          arrayMore.push(array[i]);
      } else if (array[i] === pivotNum) {
          pivot.push(array[i]);
      }
  };
  sort = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            counter++;
            holder = array[i];
            array[i] = array[i + 1];
            array[i + 1] = holder;
        }
    };
    if (counter > 0) {
        counter = 0;
        sort(array);
    };
  };
  sort(arrayLess);
  sort(arrayMore);
  return arrayLess.concat(pivot.concat(arrayMore));
};