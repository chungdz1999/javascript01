console.log("hihi");

//v1
function isNumber(n) {
    let isYou;

    if (n > 0 && n % 2 === 0) {
        isYou = true;
    } else {
        isYou = false;
    }

    return isYou;
}
console.log(isNumber(4));

//2
function isNumber(n) {
    let isYou = false;

    if (n > 0 && n % 2 === 0) {
        isYou = true;
    };

    return isYou;
};

//v3
function isNumber(n) {
    if (n > 0 && n % 2 === 0) {
        return true;
    };
    return false;
};
console.log(isNumber(3));


//4
function isNumber(n) {
    return n > 0 && n % 2 === 0;
}
console.log(isNumber(1));
