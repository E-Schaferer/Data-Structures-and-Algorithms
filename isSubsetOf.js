/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

Array.prototype.isSubsetOf = function (arr) {
  let holder = {};
  for (let i = 0; i < arr.length; i++) {
    holder[arr[i]] = arr[i];
  }
  for (let i = 0; i < this.length; i++) {
    if (!holder[this[i]]) {
      return false;
    }
  }
  return true;
};