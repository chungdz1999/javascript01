const he = [1, 2, 3]
he.push(4, 5);      ///// add last aaray
console.log(he);

const hi = [2, 4, 5]
hi.pop()            ///// remove last array
console.log(hi);

const ho = [5, 7, 9]
ho.shift()          ///// remove head array
console.log(ho);

const hu = [5, 6, 9]
hu.unshift(8, 9)     ///// add head array
console.log(hu);

const ha = [8, 9, 4, 10]
ha.splice(1,0,3)
console.log(ha);

///////////////
console.log("a hi hi".split(' ').join('*')); /// string next array
const he = "anh yêu em nhiều lắm he he"
const word = he.split(' ')
console.log(word[4]);

const key = 'lu'
const he = {
    [key]: 50
}
console.log(he[key]);