console.log("str\"".length)

let sen="Please give Rs. 1800"
let amount1=sen.slice("Please give Rs.".length)
let amount2=Number.parseInt(sen.slice("Please give Rs.".length))
console.log(typeof amount1)
console.log("Amount1 to be paid="+amount1);


console.log(typeof amount2)
console.log("Amount1 to be paid="+amount2);
let fr="Abhishek"
fr[0]="Q"
console.log(fr) //fr is not changed because String is immutable
