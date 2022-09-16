// extract properties from objects into distinct variables 
// keyword let {NAME}, not var
let { PI } = Math
PI = 1


console.log(PI)


// extract properties from objects into iterable arrays
// Object.keys(), Object.values() and Object.entries()


// Object.create(objectName) , new obj inherit from  others
// Object.create() 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype）。


// Template literals
// GRAMMAR:
// console.log(`${var name1} ${var name2} !`)
// (backtick character)

// for...in,  for of

// a. in arrays
// for in == python , extracts index
// for of extracts values of arrays

// b. in objects
// for in gets keys(both itself and prototype)
// for of can't be applied directly
// for (var key of Object.keys(Object))
// https://blog.csdn.net/q5706503/article/details/82950764



// forEach() find index and values
// https://www.runoob.com/jsref/jsref-foreach.html

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#modifying_the_array_during_iteration

// !modification on original array!
// if modify the input arrat during iteration, the result will also change.

// Syntax:
// Arrow function
// forEach((element) => { /* … */ })
// forEach((element, index) => { /* … */ })
// forEach((element, index, array) => { /* … */ })

// Callback function
// forEach(callbackFn)
// forEach(callbackFn, thisArg)

// Inline callback function
// forEach(function(element) { /* … */ })
// forEach(function(element, index) { /* … */ })
// forEach(function(element, index, array){ /* … */ })
// forEach(function(element, index, array) { /* … */ }, thisArg)(need to write 'this' after function in class, use construcor properties.)



// filter(function(var){
//     return var <==> conditions
// })

// map(function(var){
//     return num / 10
// (operate a function on each element in array)
// })
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// spread operator
// to unpackan array
// GRAMMAR: ...ArrayName

// rest operator
//  let NameA = [items1, items2, items3,  items4, items5]
// const [] = NameA
// const [first, second, third, ...NameB] = NameA


// 注意.map()语法的括号位置，function(var){}是包含在.map()里面
function addTaxToPrices(taxRate, ...itemBought) {
    return itemBought.map(function (items) {
        return taxRate * items
    })
}

let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 79)

console.log(shoppingCart)

// Template literals (Template strings)
// `string text ${expression} string text`
// To escape a backtick in a template literal, put a backslash (\) before the backtick
// `\${1}` === '${1}' // --> true

//console.log('string text line 1\n' + 'string text line 2');
// "string text line 1
// string text line 2"





