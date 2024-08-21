console.log("Array methods 1 in JS-------")
let marks=[12,89,99,78,13]
console.log("\n",marks,"and it is of type ",typeof marks)

let st=marks.toString()
console.log("\n",st,"and it is of type ",typeof st)

let c=marks.join("###") //Used to join all the elements of the array defined by the separater given as a paramter to the join function
console.log("\n",c,"and it is of type ",typeof c)

let y=marks.pop() //Removes the very last element of the array and returns this removed element
console.log("\npop- ",y)
console.log(marks)

let t=marks.push(100) //Adds the element passed as parameter to the end of the array and then returns the length of the updated array
console.log("\npush function-",t)
console.log(marks)

let r=marks.shift() //Removes an element from the very start of the array or the leftmost end and also returns this element
console.log("\nshift function-",r)
console.log(marks)

let l=marks.unshift(r) //Adds the element passed as parameter to the start of the array and then returns the length of the updated array
console.log("\nunshift function-",l)
console.log(marks)
