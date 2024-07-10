console.log("Strings in JS-------")



let player_1="Kohli"
let player_2='Rohit'
let player_3="MSDhoni"
console.log(player_1+" is of size: "+player_1.length)
console.log(player_2+" is of size: "+player_2.length)
console.log(player_3+" is of size: "+player_3.length)

//Template literals
let sentence1=`player_1, player_2 and player_3 are great friends.`
console.log("\nSentence 1 says that- "+sentence1)

// String interpolation is a great programming language feature that allows injecting variables, function calls, and arithmetic expressions directly into a string. 

let sentence2=`${player_1}, ${player_2} and ${player_3} are great friends.`  //---This is using back ticks instead of quotation marks and is also termed as String Interpolation
console.log("\nSentence 2 says that- "+sentence2)

let sentence3=`Here we have used template literals for printing "quotation" 'marks.'`
console.log("\nSentence 3 says that- "+sentence3)
