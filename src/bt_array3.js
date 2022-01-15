
// for i 
// forEach
// reduce

// -->>>> tim max 

function findMaxI(number) {
    if (!Array.isArray(number) || number.length === 0) return undefined;

    // linh canh

    let max = number[0];

    for (let i = 0; i <= number.length; i++) {
        if (number[i] > max) {
            max = number[i]
        }
    }
    return max;
}
console.log(findMaxI([5, 18, 2, 14]));
console.log(findMaxI("cc"));

// forEach
function findMaxEach(number) {
    if (!Array.isArray(number) || number.length === 0) return undefined;

    let max = number[0];
    number.forEach((number) => {
        if (number > max) {
            max = number
        }
    })
    return max;
}
console.log(findMaxEach([5, 18, 2, 14]));

//recude
function findMaxReduce(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

    let max = numberList[0];
    return numberList.reduce((max, number) => {
        if (number > max) {
            return number
        }
        return max;
    })

}
console.log(findMaxReduce([5, 18, 2, 14]));

// c2 shorhand
function findMaxReduce(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

    let max = numberList[0];
    return numberList.reduce((max, number) => {
        return number > max ? number : max;
    })

}
console.log(findMaxReduce([5, 18, 2, 14]));

//c3 shorthand
function findMaxReduce(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

    let max = numberList[0];
    return numberList.reduce((max, number) => number > max ? number : max)

}
console.log(findMaxReduce([5, 18, 2, 14]));