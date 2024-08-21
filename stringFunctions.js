console.log("String Functions in JS-------")

let sample="Temporary Var"
console.log(sample)

let sample1="\"Temporary\" Var" //Escape Sequence Character
console.log(sample1+" " +sample1.length)


console.log(sample.length)
console.log(sample.toUpperCase())
console.log(sample.slice(2,4)) //Start index is inclusive and end index is not inclusive
console.log(sample.slice(2))
console.log(sample.replace("Var","Text"))

sample=sample+" ADY"
//Printing all characters in a string
for(let i=0;i<sample.length;i++)
{
    console.log(sample[i])
}
