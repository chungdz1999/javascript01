function TinhChuVi(a, b) {
    if (a <= 0 || b <= 0) return -1;

    // const chuvi = (a * b);
    // return chuvi;
    return (a * b);
};
console.log(TinhChuVi(0, 4))

//
function Inter(n) {
    return n % 2 === 0
    // if (n % 2 === 0 ) {
    //     return true
    // }
    // else {
    //     return false
    // }
};
console.log(Inter(4))

function Inter(n) {
    return n % 2 !== 1
    // if (n % 2 === 0 ) {
    //     return true
    // }
    // else {
    //     return false
    // }
};
console.log(Inter(4))

function Inter(n) {
    return n % 5 === 0
    // if (n % 2 === 0 ) {
    //     return true
    // }
    // else {
    //     return false
    // }
};
console.log(Inter(1))


// tim kiem so chinh phuong 
function prefert(n){
    if ( n <= 0) return false;

    const int = Math.sqrt(n)
    const intGo = Math.round(int);
    return intGo * intGo === n;
}

console.log(prefert(1))
console.log(prefert(2))
console.log(prefert(3))
console.log(prefert(4))
console.log(prefert(5))
console.log(prefert(25))



