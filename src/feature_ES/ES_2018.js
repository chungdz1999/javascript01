///// ...rest

const hi = {
    id: 1,
    name: 'chung',
    age: 18,
}

const { id: ok , ...rest} = hi;
console.log(ok);
console.log(rest);



// ex:
function f (x, y, ...a) {
    return (x + y) * a.length
}
console.log(f(1, 2, "hello", true, 7) === 9);


////

const [first , two , ...rest] = [1,2,3,4,5]
console.log(rest);

//// ...number

