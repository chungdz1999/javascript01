const promise = new Promise(resolve =>
    setTimeout(() => resolve('chung')
        , 2000)
    // reject(new Error('okok loicmnr'))
);

promise
    .then(result => console.log(result)) //// lấy giá trị ra thì .then
    .catch(error => console.log(error))
// console.log(promise);

///// promise.resolve và promise.reject
const he = Promise.resolve('chung')
console.log(he);

///// lưu ý : khi show error phải có catch
///// dùng promise fetch api  ///// có nhiều loại promise .all .allSetlled .any .race

//// ex:
const b = new Promise(resolve => {
    resolve('con dúi láo tét')
})
const promiseA = Promise.resolve('onl lẹ trả điểm cho mình')
const promiseB = Promise.resolve(b)

Promise.all([promiseA, promiseB])
    .then(([promiseA, promiseB]) => console.log(promiseA, promiseB))
    .catch(error => console.log(error))