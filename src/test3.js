const student = [
    {
        id: 1,
        name: 'chung',
        math: 9,
    },
    {
        id: 2,
        name: 'ok',
        math: 10,
    },
    {
        id: 3,
        name: 'hi',
        math: 10,
    },
]
// const isArr = student.find(x => x.math <= 10)
// console.log(isArr);

function findElement(hihi) {
    return hihi.name === 'hi';
}

console.log(student.find(findElement));

////////////// test object
const lukaku = {
    name: 'chung',
    age: 18,
    email: 'cc'
}

const { name, age, dc = 'kk' } = lukaku
console.log(age);
console.log(dc);
console.log(lukaku.email);
// console.log(he1);
// console.log(he2);


function getTaxiCount(passengersCount) {
    // your code here

    if (passengersCount >= 4 && passengersCount <= 9) return 1;

    if (passengersCount <= 4) return 1;

    if (passengersCount >= 10 && passengersCount <= 19) return 2;

    if (passengersCount > 20) return 3;

}
console.log(getTaxiCount(21));

console.log((123 % 100) % 10);

console.log(Math.trunc(987 / 100));

function getMaxDigit(n) {
    // if (n.toString().length !== (1,2,3)) return -1;
    if (n.toString().length === 1) return n;

    if (n.toString().length === 2) return n % 10;

    // if (n.toString().length === 3) {
    //    return (n % 100) % 10 
    // } 
    // else 
    if (n.toString().length === 3 ) {
       return Math.trunc(n / 100);
    }
}
// console.log(getMaxDigit(5));
// console.log(getMaxDigit(12));
console.log(getMaxDigit(123));
// console.log(getMaxDigit(925));

////// find 
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];
  
  function isCherries(x) {
    return x.name === 'cherries';
  }
  
  console.log(inventory.find(isCherries));
  // { name: 'cherries', quantity: 5 }



