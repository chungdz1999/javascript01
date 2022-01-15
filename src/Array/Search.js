/// very() all condition true => true
console.log([1,2,5,8].every(x => x % 2 === 0));  /// fasle
console.log([2,4,6,8].every(x => x % 2 === 0)); /// true

/// some() one of the condition one true // chỉ cần có 1 th true thì true
console.log([1,2,5,9].some(x => x % 2 === 0));  /// true
console.log([1,9,5,2].some(x => x % 2 === 0));  /// true
console.log([2,4,6,8].every(x => x % 2 === 0)); /// true
console.log([1,3,5,7].every(x => x % 2 === 0)); /// fasle

/// indexOf() => serach vị trí
console.log([1,2,5,8].indexOf(1)); /// tìm số 5
console.log(['one','two','three'].indexOf('one')); 
console.log([2,1,5,8].lastIndexOf(8));  /// return -1

/// include
console.log(['one','two','three'].includes('one')); 