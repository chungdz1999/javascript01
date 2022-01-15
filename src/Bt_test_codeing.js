//bt1 ve taxi
function getTaxiCount(n){
    if (n <= 0 )  return "deo co khack ok chua djt me";
    
    if (n > 4 && n < 10 ) return "xe 7 cho ";
    if (n <= 4 ) return "xe 4 cho";

    if (n >= 10 && n < 20 ) return "xe 7 cho va xe 4 cho";
    if (n >= 20 && n < 99) return "xe 3 cho";
    return "cc"
}
console.log(getTaxiCount(10));
console.log(getTaxiCount(19));
console.log(getTaxiCount(100));

//bt2 

// function getMaxDigit(n) {
//     if ( n <= 0 && n < 1000 ) return -1;

//     if (n.toString().length !== 1 )
    
//     return n 
   
//     if (n.toString().length !== 2 ) 

//     return n % 10 ;
    
//     // if (n.toString().length !== 3 ) return n % 10;

//     // if (n.toString().length !== 3 ) return Math.trunc(n / 100);
// }

// console.log(getMaxDigit(72));

function getMaxDigit(x,y,z) {
    if ( (x,y,z) <= 0 && (x,y,z) < 1000 ) return -1;

    let max = x
    if ( y > max ) max = y;
    if ( z > max ) max = z;

    return max;
}
console.log(getMaxDigit(1,2,9));
