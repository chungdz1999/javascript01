//v1
function intOne(n) {
    if (n.toString().length !== 3) return -1;

    return n % 10;
};

console.log(intOne(187));

//v2
function intTen(n) {
    if (n.toString().length !== 3) return -1;

    // 223 % 100
    //  23
    //  23 / 10 = 2.3 => 2 
    return Math.trunc((n % 100) / 10);
};

console.log(intTen(187));
console.log(intTen(997));

//v3
function intHunter(n) {
    if (n.toString().length !== 3) return -1;

    return Math.trunc(n / 100);
}
console.log(intHunter(589));


//v4
function allTotal(n) {
    if (n.toString().length !== 3) return -1;

    const ok1  = n % 10 ;
    const ok2 = Math.trunc((n % 100) / 10)
    const ok3 = Math.trunc(n / 100)
    return ok1 + ok2 + ok3;
}

console.log(allTotal(345));






