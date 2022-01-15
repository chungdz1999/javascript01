/// BigInt chuyen them cuoi chuoi co n de trach sai lech so cuoi
const balance = BigInt('9007199254740991')
console.log(balance + 2n);
console.log(balance);



//// Dynamic Import
/*  file math.js */
const add = (num1, num2) => num1 + num2;
export { add }

/* file index.js */
const doMath = async (num1, num2) => {
    if (num1 && num2) {
        const math = await import('./math.js');
        console.log(math.add(5, 10));
    };
};
doMath(4, 2);

////************  Nullish Coalescing
const value = x ?? y;
//// chi co gia tri NULL va undefined
console.log(null ?? 3);
console.log(undefined ?? 10);
///// con cac falesy con lai deu dc chon
console.log(0 ?? 5);
console.log(false ?? 8);
console.log(false || 8);
console.log(null || 'easy');

/// 3. Optional Chaining
oje.student?.name;
oje.function?.(); /// ***** ///

/// 4.Module Namespace Exports
/// before
import * as utils from './utils.js' 
export { utils }
/// currents shorhand
export * as utils from './utils.js' 
