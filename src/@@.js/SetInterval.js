function countDown(num){
    let numId = num;

    const he = setInterval(() => {
        console.log(numId);
        if ( numId <= 0 ){
            clearInterval(he);
        }
        numId -= 1;
    },1000);
}
countDown(10);