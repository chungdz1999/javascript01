//// find(callbackfn)   => tìm phần tử đầu tiên thỏa dk

console.log([2,3,6].find(x => x % 2 === 0));
console.log([1,10,6,8].find(x => x % 2 === 0));

/// findIndex()
console.log([2,3,6].findIndex(x => x % 2 === 0)); /// trả về vị trí index
console.log([1,10,6,8].findIndex(x => x % 2 === 0));

console.log(['chung', 'lukaku'].find(x => x.length > 5));
console.log(['chung', 'lukaku'].findIndex(x => x.length > 5)); /// trả về vị trí index

