// default parameter value // truyen gia tri mac dinh 

function sum(a = 5, b = 10) {
    return a + b;
}
console.log(sum());

function sum(a, b = 5) {
    return a + b;
}
console.log(sum(5));

// reft funtion

function total(...numberList) {
    return numberList.reduce((tong, number) => tong + number, 0)
}
// console.log(total(1,2,3));

const he = [1,2,3]
console.log(total(...he));

function total(numberList) {
    return numberList.reduce((tong, number) => tong + number, 0)
}
console.log(total([1,2,3]));

// arrow function

const getValue = () => {
    return { name : ' chung'};
};
console.log(getValue());