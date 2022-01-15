const he = setTimeout(() => {
    console.log('lulu');
})
console.log('hihi');

function okok() {

}

okok()

setTimeout(okok, 2000)

//////  **************
const hehe = (function () {
    let ok = 'chung';
    return function hihi() {
        ok;
        console.log(ok);
    };

})();

hehe();

