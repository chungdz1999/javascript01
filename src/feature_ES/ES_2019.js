// flat // flatMap

console.log([1, 2, [3, 4]].flat(1));

console.log([1, 2, [[3], 4]].flat(1));

console.log([1, 2, [[3], 4]].flat(2));

//// flat funtion

console.log([2, 4].map(x => [x , x * 2]).flat(1));

console.log([2, 4].flatMap(x => [x , x * 2]));

//////// Object.fromEntries()

const he = {
    id: 1,
    name: 'chung',
    age: 18,
}

const entries = Object.entries(he);
console.log(entries);

/// tra ve 1 object ban dau :)))
console.log(Object.fromEntries(entries));
/////////////////////////////////////

/// String.prototype.trim ( trimStart , trim End)
/// bo khoang trong dau va cuoi
console.log( ' chung dz  '.trim());