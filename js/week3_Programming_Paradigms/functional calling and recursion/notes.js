// 1.recursive function and infinite loops

// 2.scope
// global and local(function) scope, local variables are scoped to fuctions
// var, and block vars( let, const )
// two seperate variables with same name can be created if one of them is global and the other one is block


// different between var and let, const
// var can be redeclared and reassigned
// let can be reassigned but not redeclared(with statement in front of variable )
// const can not be redeclared and reassigned

// let and const can not be redeclared
// let and const can not be used before it is declared
// let and const scope to the block(e.g while or for loops)


// tips：
// use let if the variable will change in the future while use const the other way




console.log(square(5));

function square(n) { return n * n }


// function 的构造函数
// 语法
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

// 在funcion中添加新的属性，不可以直接Person.nationality
Person.prototype.nationality = "English";