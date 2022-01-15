const numbetList = [1, 2, 6, 8, 5];
const hehe = numbetList.filter(x => x % 2 === 0);

console.log(hehe);

const numbetList = [1, 2, 6, 8, 5];
const hehe = numbetList.filter(x => x + 1);

console.log(hehe);

const newGame = [1, 2, 3]
const newElement = newGame.map(x => x + 1)

console.log(newElement);

const numbetList = [1, 2, 6, 8, 5];
const hehe = numbetList.map(x => x % 2 === 0);

console.log(hehe);

const numbetList = [1, 2, 6, 8, 5];
const hehe = numbetList.map(x => x + 1);

console.log(hehe);



const newBye = ['easy', 'gameLol']
// const hehe = newBye.map(x => x.length)
const hehe = newBye.map(x => `supercool-${x}`)

console.log(hehe);

/// loc theo cac dieu kien 
const newBye = [1, 5, 3, 7, 9]
// const hehe = newBye.map(x => x.length)
// const hehe = newBye.filter(x => x > 4)
const hehe = newBye.filter(x => x <= 10 && x % 5 === 0);
console.log(hehe);

//////// loc theo string
const newBye = ['easy', 'gameLol']
// const hehe = newBye.map(x => x.length)
const hehe = newBye.filter(x => x.length < 5)

console.log(hehe);

/// startWith ****************
const newBye = ['easy', 'gameLol', 'teacher']
const hehe = newBye.filter(x => x.startsWith('ea'))

console.log(hehe);

//// sort 

const newIt = [1, 4, 3 , 8 , 6]
const hehe = newIt.sort();

console.log(hehe);



const numbetList = [1, 2, 6, 8, 5];
const hehe = numbetList.filter(x => x % 2 === 0 );

console.log(hehe);


