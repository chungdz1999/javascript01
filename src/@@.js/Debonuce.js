function log() {
    console.log('dúi nhực ngốc nghếnh , sợ bị giết quá đêyyy');
}
function debonuce(callback , wait){
    let timeOutId ;
    
    return function(){
        if (timeOutId){
            console.log(timeOutId);
            clearTimeout(timeOutId);
        }
        timeOutId = setTimeout(callback,wait)
    };
}
// debonuce(log , 500)()
const debonuce1 = debonuce(log , 500) /// 0.5s
debonuce1();
debonuce1();
debonuce1();

