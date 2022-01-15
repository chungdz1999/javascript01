const key = 'cc'

const student = {
    id: 1,
    name: 'dui nhot nhot',
     "chung dz" : 'chung',

    [key]: 99,
    // key,
    [`chung${key}`]: function() {
        return  100 ;
    }
    
}
console.log(student.id);
console.log(student["chung dz"]);
console.log(student.cc);
console.log(student[key]);
console.log(student.chungcc());


///////// swap
let x = 5;
let y = 10;

[y,x] = [x,y]
console.log(x);
console.log(y);

const x = 5;
const y = 10;

const z = [x,y]
console.log(z);


//// rename prop
//// detructuring value

const hehe = {
    id: 1,
    name: 'chung'
}

const { id: zed , name , age = 1000 } = hehe;
console.log(zed);
console.log(age);
console.log(name);
