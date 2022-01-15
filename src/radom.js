function radomNumber(n) {
    if (n <= 0) return -1;

    const random = Math.random() * n;
    return Math.round(random);
};

console.log(radomNumber(10))


// function randomNumber(a, b) {
   
//     if (a < b) {
//         const random = Math.random() * (a,b);
//         return Math.round(random);
//     }
// };

// console.log(randomNumber(5, 10));

function randomNumberInt(a,b){
    if ( a >= b) return -1;

    const random = Math.random() * (b-a);
    return Math.round(random) + a;
}
console.log(randomNumberInt(10,100))