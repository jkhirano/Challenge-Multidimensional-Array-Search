function locate(array, target) {
  // do work here
  // arr1 = ['a', 'b', 'c', 'd', 'e']; // locate a - boolean
  // arr2 = ['a', 'b', ['c', ['d'], ['e']]]; // locate f - false
  // arr3 = ['a', ['b'], 'c', ['d'], ['e']]; // locate e - true
  // arr4 = ['a', 'b', ['c', ['d'], ['e']]]; // locate e - true

  // for loop or while loop? or nested for loop?
  // if any array includes [i], return true, else return false

  // for (let i = 0; length = array.length; i < length; i++) {
  //   for (let j = 0; length2 = array[i].length; j < length2; j++) {
  //     if (array.includes([i])) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  //   // console.log(array[i][j]);
  // }

  // returns boolean
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
    // checks if [i] is an array
    if (Array.isArray(array[i])) {
      if (locate(array[i], target) === true) {
        return true;
      }
    }
  }

  return false;
}

module.exports = locate;
