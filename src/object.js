// object detructuring
const students = {
    name: 'chung',         //name,
    age: 22,
    gmail: 'cc.gmail.com'
};

// const namee = students.name
// const age = students.age
// const gmail = students.gmail
// console.log(namee, age ,gmail);

const { name, age, gmail } = students;
console.log(name, age, gmail);
// console.log(students.gmail.includes('.kem'));


//////// property value shorhand
const name = "ez gmae"
const age = 18
const students = {
    name: name,
    age: age
}
console.log(students.age);
// thay the
const name = "ez gmae"
const age = 18
const students = {
    name,
    age,
}
console.log(students.age);



// kiem tra co key dung in
const students = {
    name: 'chung',
    age: 18
}
console.log('name' in students);
console.log('chung' in students);
console.log('age' in students);

// clone object
const school = {
    name: 'chung',
    age: 18,
}
const students = {
    isKo: true,
    gmail: 'cc.com'
}
//  c1:
    // const hi1 = Object.assign({}, school, students)
    // console.log(hi1);
// c2:
const hi2 = {
    ...school,
    ...students
}
console.log(hi2);

////////////////////////////////////////////////////////
const school = {
    name: 'chung',
    age: 18,
}
const students = {
    isKo: true,
    gmail: 'cc.com'
}
//  c1:
    const hi1 = Object.assign({Dc: '67c'}, school, students)
    console.log(hi1);

//// gan bien truoc ben ngoai
const students = {}
students.name = 'chung'
students.age = 18
console.log(students);
