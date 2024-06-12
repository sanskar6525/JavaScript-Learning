console.log("Primitive Data Types and Objects -------")
//There are 7 different types of Primitive Data Types in JS

let a =null;
let b=345;
let c=true;
let d=BigInt("3434324")+BigInt("2");
let e="Sans";
let f=Symbol("This is a symbol");
let g=undefined

console.log(a, b, c, d, e, f, g);

console.log("a= "+typeof a);
console.log("b= "+typeof b);
console.log("c= "+typeof c);
console.log("d= "+typeof d);
console.log("e= "+typeof e);
console.log("f= "+typeof f);
console.log("g= "+typeof g);

//Objects are non-primitve data types and are key value pairs
const item= {
    "Harry":true,
    "Shubh": false,
    "Lorenzo": 56,
    "Basanio":undefined
}

console.log(item["Bassanio"]);