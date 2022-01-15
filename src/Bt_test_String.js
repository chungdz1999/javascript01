// Easy Game
function caption(str) {
    if (str === '') return '';

    const hi = str[0].toUpperCase();
    const ok = str.slice(1).toLowerCase();
    return `${hi}${ok}`;
    // return hi + ok ;

}
console.log(caption('easy GaMe'));

// includes
// indexOf
function search(str) {
    return str.includes('@gmail.kem');
}
console.log(search('ahihii lukaku sadb@gmail.kem.com'));
console.log(search('ahihii lukaku sadb@gmail.km.com'));


//
function lowerCase(str) {
    // return str.toLowerCase().replace('A','ok')
    return str.toLowerCase().replaceAll(' ', '-')
}

// console.log(lowerCase('AHIHI'))
console.log(lowerCase('A HI HI'))

function lowerCase(str) {
    // return str.toLowerCase().split(' ')
    return str.toLowerCase().split(' ').join('-')
}
console.log(lowerCase('ANH YEU EM'));


//// cach 1 
function removeVowel(str) {
    if (str === '') return '';

    return str.replace(/[u,e,o,a,i]/g, '');

}
console.log(removeVowel('say hello'));
console.log(removeVowel('i love you'));

/// cach 2
function removeVowel(str) {
    if (str === '') return '';
    return str
    .replace('u', '')
    .replace('e', '')
    .replace('o', '')
    .replace('a', '')
    .replace('i', '')
    .trim(); //// remove whitespace start and end
}
console.log(removeVowel('say hello'));
console.log(removeVowel('i love you'));

