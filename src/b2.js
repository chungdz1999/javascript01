// if else version 2

//v1
function lucian(mark) {
    let ok = 'yeu sinh li';

    if (mark > 8) ok = 'Cao';
    else if (mark >= 7) ok = 'Kha';
    else if (mark >= 5) ok = 'trung binh'
    // else ok = "yeu sinh li"

    return ok;
}

console.log(lucian(7));

//v2 
function ezreal(Q) {
    if (Q < 0 || Q > 11) return 'faild roi ku'

    if (Q > 8) return 'cao'
    if (Q > 7) return 'kha'
    if (Q > 5) return 'trung binh'
    return "bad"
}
console.log(ezreal(10));

function getTicketPrice(age) {
    if (age <= 0 || age > 125 ) return "ko hop le"

    if (age < 6 && age > 70) return "Free"
    
    if (age >= 6 && age <=12) return "20.000 vnd"
    
    
    if (age > 12 && age < 70) return "50.000 vnd"

    return 50.000

}
console.log(getTicketPrice(13))

