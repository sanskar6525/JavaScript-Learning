console.log("Array methods 2 in JS-------")
let marks=[12,89,99,78,13]
let size=marks.length
console.log("\nArray marks- ",marks," and it is of type ",typeof marks," and has size- ",marks.length)


delete marks[size-1] //This will delete the element existing at position mentioned but this wont affect the size or length of the array
console.log("\ndelete function-- Array marks- ",marks," and it is of type ",typeof marks," and has size- ",marks.length)
console.log(typeof marks[size-1])

marks[size-1]=56
console.log("\nArray marks- ",marks," and it is of type ",typeof marks," and has size- ",marks.length)

marks.sort() //Sorts the arrray in ascending order
console.log("\nsort function Array marks- ",marks," and it is of type ",typeof marks," and has size- ",marks.length)

let compare=(a,b)=>{
    return b-a
}

marks.sort(compare) //This sorts the array on the basis of the criteria defined in the compare function
console.log("\nsort function with compare argument Array marks- ",marks," and it is of type ",typeof marks," and has size- ",marks.length)


//splice(<position_to_add_at,number_of_elements_to_remove,<elements to be added>,<elements to be added>....)
//splice function also returns the deleted elements 
let temp=marks.splice(1,4,100,56,22)
console.log("\nsplice function Array marks- ",marks," and it is of type ",typeof marks," and has size- ",marks.length)
console.log("Deleted elements- ",temp)
console.log("Deleted elements type - ",typeof temp)

//Splice modifies the original array but slice doesn't