let obj = {
    id: 0,
    name: "Muhammad Hussain",
    age: 29,
}

let task1 = `Get all the keys of a given object?`
let task2 = `Get all the values of a given object?`

console.log('Given Object');
console.log(obj);

console.log();
console.log(`Q.No#1: ${task1}`)

let keys = Object.keys(obj)
console.log(keys)
console.log();

console.log(`Q.No#2: ${task2}`)

let values = Object.values(obj)
console.log(values)
