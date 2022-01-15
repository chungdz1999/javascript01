/// for i     ES5
const numberList = [2, 4, 6]
for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i]
    console.log(number);
}

/// forEach  ES5
const numberList = [1, 2, 3]
numberList.forEach(x => console.log(x))

/// for of ES6  // not index 
const numberList = [1, 2, 3]
for (const number of numberList){
    console.log(number);
}


// () => {} arrow function
const numberList = [1, 2, 5]
numberList.forEach((number,idx) => console.log(number,idx))

const numberList = [1, 2, 5]
numberList.forEach((number,idx) => {console.log(number,idx)})
