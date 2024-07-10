console.log("While loops-------")

//let a= prompt("Enter the value of n")  --------- Prompt doesn't work in Node js and VS code uses Node js

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the value of n: ", (input) => {
    let a=Number.parseInt(input);    
    let i=0
    while(i<a)
    {
        console.log(i)
        i++
    }

    console.log("\n"+"Do While loops-------")
    i=0
    do{
        console.log(i)
        i++
    }while(i<0)
    rl.close();
})

