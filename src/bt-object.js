function cloneObject({ }) {
    const studentA = {
        name: 'bob',
        math: 9
    };

    const studentB = {
        ...studentA,
    };
    console.log(studentA === studentB);
    console.log(studentB.name);
}
// console.log(cloneObject({ studentA === studentB}));
// console.log(cloneObject({ studentB.name }));



// const studentA = {
//     name: 'bob',
//     math: 9
// };

// const studentB = {
//     ...studentA,
// };
console.log(studentA === studentB);
console.log(studentB.name);


/// bai tap duyet key use in

const hehe = {
    id: 1,
    name: 'chung dz',
    isNuk: true
}

for (let key in hehe) {
    console.log('key', key);
    console.log('value', hehe[key]);
}

///////// ham kt 2 obj co bang nhau khong

isEqual(obj1, obj2)

const obj1 = {
    name: 'chung',
    age: 18
}

const obj2 = {
    name: 'chung',
    age: 18
}
console.log(obj1, obj2);


function findSecret(code) {
    const item = code.split('');
    for (let i = 0; i < item.length; i++) {
        item[i] = item[i].toLowerCase(i);
        return item.join('');
    };
}
console.log(findSecret('SUPERcodeEE'));
console.log(findSecret('SUPERcodeEE'));


function djtMeThCuong(str) {
    const string = str.split('gamil.com').join('');
}

console.log(djtMeThCuong('ccasdasd@gmail.com'));

//
function djtMeThCuong(str) {
    const item = str.split('')
    const arr = []
    for (let i = 0; i < item.length; i++) {
        if (item[i] === item[i].toLowerCase()) {
            arr.push(item[i]);
        }
    }
    return arr.join('')
}

console.log(djtMeThCuong('DJTMEmayCC'));
console.log(djtMeThCuong('DgfgfgJTMfgfgEmayCC'));


function findSecret(str)  {
    let item = str.split('');
    let secret = '';
    for (let i = 0; i < item.length; i++) {
        if (item[i] === item[i].toLowerCase()) {
            secret = secret + item[i];
        }
    }
        return secret;
}
console.log(findSecret('DgfgfgJTMfgfgEmayCC'));
console.log(findSecret('AHIHIoooCC'));

/////// test :)))
const he = {
    name: 'chung',
    age: 18,
    email: {
        name : 'con ku',
    }
}
const hu = {
    ...he,
}
hu.name = 'con meo'
hu.email.name = 'con ku 1'
console.log(he.name);
console.log(he.email.name);
console.log(hu.name);
console.log(hu.email.name);
