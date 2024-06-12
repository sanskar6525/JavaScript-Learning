console.log("Declaring variables-------")
//There are four ways of declaring variables in JavaScript : 

let x=1;             // Method 1 
const y=121;         // Method 2
z=12;                // Method 3
var w=23;            // Method 4

console.log("y="+y);
console.log("x="+x);
console.log("z="+z);
console.log("w="+w);
//y=22;   ------- We cannot change the value of a variable declared as const
x="Content of variable x is changed !!";             ///   ----We can change the value of variables declared by let
console.log("x="+x);
z="Z--Changed"                                       ///   ----We can change the value of variables declared without any keyword
console.log("z="+z); 
w="W is changed"                                     ///   ----We can change the value of variables declared by var
console.log("w="+w);   

//let x=1;              ------We cannot re-declare a let varibale
//const y=121;          ------We cannot re-declare a const varibale
var w=34;               //----We can re-declare a var varibale
console.log("w="+w);    