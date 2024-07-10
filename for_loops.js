console.log("For loops-------")
//There are 3 different types of For loops in JS

console.log(" ");
console.log("For loop:");
for(let i=0;i<3;i++)
{
    console.log(i);
}

console.log(" ");
console.log("For in loop:"); 
let obj={
    harry:38,
    sans:98,
    kanu:78
}
for(let a in obj) 
{
    console.log("Marks of "+a+" are "+obj[a]);
}

console.log(" "); 
console.log("For of loop:");
for(let b of "SANS") 
{
    console.log(b);
}