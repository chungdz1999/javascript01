const array1 = [5, 6, 7]

//  c1
//  const one = array1[1]
//  cosnt two = array2[0]
// c2
const [one, three] = array1
console.log(array1);
console.log(one, two, three);

// lay het cac phan tu con lai 
const array1 = [5, 6, 7, 8 , 9]

const [one, two , ...rest] = array1
console.log(one, two, ...rest);
console.log(rest);


//clone array
const array2 = ['chung', 'chung1', 'chung2']
const obj = array2

obj[0]= 'chung123'
console.log(array2);

//solution
const array2 = ['chung', 'chung1', 'chung2']
const obj =[...array2]

obj[0]= 'chung123'
console.log(array2);
