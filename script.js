//prompt user for flavors
const input = prompt("Enter the flavors of froyo you'd like to order separated by commas ','")
//turninput into an array using .split() and .trim()
const order = input.split(",")

//create empty obj
//const froyo {}
const froyo = {}

//loop through array
// for (const flavor in order) {
//     if (...)
// }

//check if key is in obj
//    if key is NOT in obj {} set key and value of key to 1
//      froyo["key"] = 1
//    if key IS in obj {} increase value by 1
//      froyo["key"] += 1

//display in a table console.table