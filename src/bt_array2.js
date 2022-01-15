const result = [2, 6, 5].reduce((sum, number) => sum + number, 5)
console.log(result);

const result = [2, 6, 5]
const hihi = result.reduce((sum, number) => sum + number, 0)
console.log(hihi);

const number = [4, 5, 6].filter(x => x % 2 === 0)
console.log(number);

///////////////////////////////////////////////

// print number
function printNumber() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
printNumber();

// lay theo so chan [ 2 -> 20 ]
function printNumber() {
    for (let i = 2; i <= 20; i += 2) {
        console.log(i);
    }
}
printNumber();

// c2
function printNumber() {
    for (let i = 2; i <= 20; i++) {
        if (i % 2 === 0)
            console.log(i);
    }
}
printNumber();

//c3 truyen tham so
function printNumber(n) {
    if ( n < 2) return ;

    for (let i = 2; i <= n; i += 2) {
        console.log(i);
    }
}
printNumber(10);

