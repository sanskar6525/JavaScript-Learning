//There are three ways of declaring variables in JavaScript : 

let x=1;             // Method 1 
const y=121;         // Method 2
z=12;                // Method 3

console.log("y="+y);
console.log("x="+x);
console.log("z="+z);
//y=22;   ------- We cannot change the value of a variable declared as const
x="Content of variable x is changed !!";             ///   ----We can change the value of variables declared by let
console.log("x="+x);
z="Changed"
console.log("z="+z);     

let sample="Outside Block";
{
    let sample="Inside Block";
    console.log("Sample Inside block="+sample);  
}
console.log("Sample Outside block="+sample);  

var sample2="Outside Block";
{
    var sample2="Inside Block";
    console.log("Sample2 Inside block="+sample2);  
}
console.log("Sample2 Outside block="+sample2);  
console.log("Sample2 Outside dfsd");
