function hihi(n) {
    return Math.floor(n)
    //     return Math.ceil(n) 
    //     return Math.ceil(n) 
    //     return Math.ceil(n) 
}
console.log(hihi(1.5));

const hi = [1, 2, 3]
const he = hi[1]
console.log(he);

{
    const name = 'chung';
    console.log(name);
}


const name = 'chung';
console.log(name);
function sayhello() {
    const language = 'en';
    console.log(name);
}
function printLanguage() {
    console.log(language);
}

function random1(n) {
    if (n < 0) return -1;

    const he = Math.random() * n;
    return Math.ceil(he);
}
console.log(random1(10));

{ // TDZ starts at beginning of scope
    console.log(bar); // undefined
    //   console.log(foo); // ReferenceError
    var bar = 1;
    //   let foo = 2; // End of TDZ (for foo)
}

{ // TDZ starts at beginning of scope
    //     console.log(bar); // undefined
    let foo = 2; // End of TDZ (for foo)
    console.log(foo); // ReferenceError
    // var bar = 1;
}


//// IIFE
(function (a, v) {
    console.log(a + v);
})(8, 9);

(() => {
    console.log('helo con dúi nhọt nhọt gạt lộ ');
})();


///// reduce
function reducee(number) {
    return number.reduce((sum, por) => sum + por, 3)
}
console.log(reducee([8, 9, 10]));

function sayhello(n) {
    return n + 5;
}
console.log(sayhello(5));


////
const a = {
    id: 1,
    name: 'easy'
}

let b = JSON.parse(JSON.stringify(a))
b.name = 'okok'

console.log(b);
console.log(a.name);
///
const a = {
    id: 1,
    name: 'easy'
}

let b = {
    ...a
}
b.name = 'okok'

console.log(b.name);
console.log(a.name);

////
const a = {
    id: 1,
    name: 'easy'
}

let b = Object.assign({}, a, { name: 'dz' })
// b.name = 'okok'

console.log(b.name);
console.log(a.name);

///
const a = {
    id: 1,
    name: 'easy'
}

let b = a
b.name = 'okok'

console.log(b.name);
console.log(a.name);

////// closure
function later() {
    let outerVar = 'Dúi Nhực siêu tạ đệ hoài';

     function okk() {
       const hi = `${outerVar} và đệ linh liều` ;
        console.log(hi);
    }
    return okk;
}
later()();
const myDui = later();
// console.log(myDui);
myDui();





////// c 2
function later() {
    let outerVar = 'Dúi Nhực siêu tạ đệ hoài';

   return function okk() {
        outerVar;
        console.log(outerVar);
    }
    
}
later();
const myName = later();
console.log(myName);
myName();

////////////////////////
function createCo(intavaule) {
    let value = intavaule || 0;

    function inri() {
        value++;
    }
    function getValue() {
        console.log(value);
        return value;
    }
    return {
        inri,
        getValue,
    }
}

const Count = createCo(5);
console.log(Count);
Count.inri()
Count.getValue()


//// 
function sum() {
    let he = 'okokokok'
    return function sun() {
        const hi = `${he} lukaku `
        console.log(hi);
    }
}
// console.log(sum(1)(2));
const sun = sum();
sun();

/////////////// gan truc tiep ahihihi
function f(x, y, z = 42) {
    return x + y + z
}
console.log(f(1, 20) === 50);
function f(x = 5, y = 5, z = 40) {
    return x + y + z;
}
console.log(f() === 50);



function f (x, y, ...a) {
    return (x + y) * a.length
}
console.log(f(1, 2, "hello", true, 7) === 9);

console.log("hello".length);
console.log(true.length);
const n = 7
n.toString.length
console.log(n);


