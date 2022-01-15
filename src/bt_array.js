// linh canh
// v1
function arrayTer(numberList) {
    if (!Array.isArray(numberList)) return undefined;

    let fish;
    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];
        if (number % 2 === 0) {
            fish = number;
            break;
        }
    }
    return fish;
}
console.log(arrayTer([1, 5, 9, 7]));

//v2 
function arrayTer(numberList) {
    if (!Array.isArray(numberList)) return undefined;

    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];
        if (number % 2 === 0) {
            return number;
        }
    }
    return undefined;
}
console.log(arrayTer([1, 5, 9, 7]));

// Map - bien doi mang

function map(arr, mappingFn) {
    if (!Array.isArray(arr) || typeof mappingFn !== 'function') return undefined;

    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        const newElement = mappingFn(element, i)
        newArray.push(newElement);
    }
    return newArray;
}
console.log(map([2, 3, 4], x => x + 1));
console.log(map([4, 5, 6], x => x * 2));
console.log(map(
    [4, 5, 6], (x, idx) => (idx % 2 === 0 ? x + 1 : x * 2)
));
console.log(map(['easy', 'frontend '], x => x.length));


function map(arr, mappingFn) {
    if (!Array.isArray(arr) || typeof mappingFn !== 'function') return undefined;

    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const newElement = mappingFn(element, i);
        newArray.push(newElement);
    }

    return newArray;
}
console.log(map([2, 3, 4], x => x + 1));