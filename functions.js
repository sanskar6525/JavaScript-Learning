console.log("Functions in JavaScript-------")

let a=231;
let b=23;
let c=22;

console.log("\n---------Finding average without functions-------------")
console.log("Average of the numbers is: "+(a+b)/2)
console.log("Average of the numbers is: "+(a+c)/2)
console.log("Average of the numbers is: "+(b+c)/2)

function average(x,y)
{
    return (x+y)/2
}

//Another way to define a function5
const sample =()=>{
    console.log("\nSAMPLE !!!")
}

const sum =()=>{
    console.log("\nSum of 1212 and 12 is ",(1212+12))
}

console.log("\n---------Finding average with functions-------------")
console.log("Average of the numbers and one added to it is: ",average(a,b)+1)
console.log("Average of the numbers and one added to it is: ",average(a,c)+1)
console.log("Average of the numbers and one added to it is: ",average(c,b)+1)

sample()
sum()
