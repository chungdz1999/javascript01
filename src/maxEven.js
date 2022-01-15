function testHours(Hours){
    if ( Hours < 0) return -1;
    if (Hours === 0 ) return 0;

    const HOURS_TIME_ONE = 3600;
    return Hours * HOURS_TIME_ONE;

}
console.log(testHours(1));

//
function Linhcanh(a,b,c){
    let max = a;

    if( b > max) max = b;
    if( c > max) max = c ;

    return max;
}
console.log(Linhcanh(7,6,5));

