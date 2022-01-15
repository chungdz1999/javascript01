const he = {
    name: 'chung',
    getValue() {
        return 50;
    }
}
const ok = he.getValue()
console.log(ok);

const hi = (a, b) => {
    console.log(a + 100);
    console.log(b + 200);
}

hi(5, 10);


function map(number, mappingfn) {
    if (!Array.isArray(number) || typeof mappingfn !== 'function') return undefined;

    const newArray = []
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        // console.log(i);
        const newElement = mappingfn(element , i)
        console.log(newElement ,i);
        newArray.push(newElement);
    }
    return newArray;
}
console.log(map([2,4,6], x => x + 1));

// console.log(typeof (() => {}));

const arrayy = [ 1,2,2,3,3,4,4,4,5,6,6]
const arr = [...new Set(arrayy)]
console.log(arr);

let mySet1 = [...new Set().add(1)]
console.log(mySet1);    

let mySet1 = new Set().add(3).add(5)
// mySet1.clear();

console.log(mySet1); 

// size 
let mySet1 = new Set().add(3).add(5)
// mySet1.clear();

console.log(mySet1.size); 

/// has
let mySet1 = new Set().add(3).add(5)
// mySet1.clear();

console.log(mySet1.has(3)); 

//// 
console.log(123.456.toPrecision(2));