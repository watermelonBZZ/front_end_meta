// class Name{
//     ObjectName(argument(s)){
//         this.propertyname1: value1,
//         this.propertyname1: value1

//     }
// }


// contructors do not need return
// Grammar :a. inside class

// class NameExample(){
// contractor(parameter1, parameter2){
// this.property1 = parameter1
// this.property2 = parameter1
//     }
// }
//



// Grammar: b. function contractor
// first letter of contractor name capitalize
// 2.function Name(uname, age, sex){
// this.name = uname
// this.age = age
// this.sex = sex

// }
// var a = new Name(name, age, sex);


// inheritance in class
// Grammar:
// class NameA{
// contrator(parametersA){
// this.property1 = value1
// this.property2 = value2
//     }

// NameofFunctionA(){
// this.property2 = !this.property2

// }
// }

// class NameB extends NameA{
// contractor(parametersA, parametersB){
// super(parametersA)
// this.parametersB = valueB
// }

// NameofFunctionB(){
// super.NameofFunctionA() (inherit from above)
// console.log("new values") (add new statement)

// }

// }

// use keyword "new" to invoke



// 注意object对象，function构造函数，class类的区别


// // 构造函数和对象

        // 构造函数,如Stars() , 抽象了对象的公共部分 ,封装到了函数里面,它泛指某一大类(class )

        // 创建对象,如new Stars(),特指某一个 ,通过new关键字创建对象的过程我们也称为对象实例化

        // 如:汽车设计图(构造函数)

        // 一台真宝马(对象实例)

        // 构造函数和对像

        // 1.构造函数 明星 泛指的某一大类 它类似于 Java 语言里面的 类(class)

//         function Star(uname , age , sex) {

//             this.name = uname ;

//             this.age = age;

//             this.sex = sex;

//             this.sing =function(sang)  {

//                 console.log(sang)

//             }

//         }

//         // 2.对象 特指 是一个具体的事物 刘德华 == {name : "刘德华" , age : 18} ; sex : 男;sing : f}

//         var ldh = new Star("刘德华" , "男" , 18)//调用返回的是一个对象

//         console.log(ldh.name)

//         // 3.我们利用构造函数创建对象的过程我们也称为对象的实例化
// ————————————————
// 版权声明：本文为CSDN博主「Lonelydesertea」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/Lonelydesertea/article/details/121914787