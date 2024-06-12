console.log("Scope of variables using var-------");

var sample1="var sample--Outside Block";
console.log("var Sample before block= "+sample1); 
{
    var sample1="var sample--Inside Block";
    console.log("var Sample Inside block= "+sample1);  
}
console.log("var Sample after block= "+sample1); 
//var variables have a global scope and values can be changed anywhere


console.log("Scope of variables using let-------");
let sample2="let sample--Outside Block";
console.log("let Sample before block= "+sample2); 
{
    let sample2="let sample--Inside Block";
    console.log("let Sample Inside block= "+sample2);  
}
console.log("let Sample after block= "+sample2); 
//let and const variables are block scoped

console.log("Scope of variables-------");
sample3="sample--Outside Block";
console.log("Sample before block= "+sample2); 
{
    sample3="sample--Inside Block";
    console.log("Sample Inside block= "+sample3);  
}
console.log("Sample after block= "+sample3);

// console.log("Sample Outside block="+sample);  
// var sample2="Outside Block";
// {
//     var sample2="Inside Block";
//     console.log("Sample2 Inside block="+sample2);  
// }
// console.log("Sample2 Outside block="+sample2);  