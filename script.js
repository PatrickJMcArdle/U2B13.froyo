//prompt user for flavors
const input = prompt("Enter the flavors of froyo you'd like to order separated by commas ','")
//turninput into an array using .split() and .trim()
const order = input.split(",")

//create empty obj
//const froyo {}
const froyo = {}

//loop through array
// THIS WAS CHATGPT'S ANSWER
// I understand what it means and it's cleaner so I'm using it, but below I will put my version of it

for (let flavor of order) {
    froyo[flavor] = (froyo[flavor] || 0) + 1;
}

console.table(froyo)

// Here is my version of the above code

// function getFlavors(array, obj) {
//     for (let flavor of array) {
//         if (obj[flavor] !== undefined) {
//             obj[flavor] += 1;
//         } else {
//             obj[flavor] = 1;
//         }
//     }
//     return froyo
// }

// console.table(getFlavors(order, froyo))

// Here's a version with key in obj notation

// function count(arr) {
//     const obj = {};
//     for (const element in arr) {
//         if (element in obj) {
//             obj[element] += 1;
//         } else {
//             obj[element] = 1;
//         }
//     }
//     return obj;
// }


//check if key is in obj
//    if key is NOT in obj {} set key and value of key to 1
//      froyo["key"] = 1
//    if key IS in obj {} increase value by 1
//      froyo["key"] += 1

//display in a table console.table