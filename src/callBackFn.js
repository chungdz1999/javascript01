function findTer(arr, callBackFn) {
    if (!Array.isArray(arr) || typeof callBackFn !== 'function') return undefined;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (callBackFn(element, i)) {
            return element;
        }
    }
    return undefined;
}
function iven(element) {
    return element % 2 === 0;
}
console.log(findTer([1,2,3], iven));


/// inline funtion
/// ko có tên là anonymous fn
function findTer(arr, callBackFn) {
    if (!Array.isArray(arr) || typeof callBackFn !== 'function') return undefined;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (callBackFn(element, i)) {
            return element;
        }
    }
    return undefined;
}
// function iven(element) {
//     return element % 2 === 0;
// }
console.log(findTer([1,4,6], function (element) {     /// inline fn
    return element % 2 === 0;
}));

console.log(findTer([1,4,6],  (element) => element % 2 === 0
));
