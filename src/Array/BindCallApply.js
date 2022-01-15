function hi(a, b) {
    console.log(this.name, a + b);
}

const student = {
    id: 1,
    name: 'chung',
}

const okok = hi.bind(student);
okok();

hi.call(student, 8, 9);

hi.apply(student, [5, 5]);