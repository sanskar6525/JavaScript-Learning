console.log("Practice Program-------")
let marks={
    harry:100,
    sanskar:99,
    rohab:78,
    sam:12
}

for(let i=0;i<Object.keys(marks).length;i++)
{
    console.log("The marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
}
console.log("\n")
for(let name in marks)
{
    console.log("The marks of "+name+" are "+marks[name])
}