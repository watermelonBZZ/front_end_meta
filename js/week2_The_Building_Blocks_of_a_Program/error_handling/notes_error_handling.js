// // error handling
// // using (throw, try, catch) blocks
// // GRAMMAR:ReferenceError();
// // name parameter in catch block can be any
// try {
//     // console.log(a + b)
//     throw new ReferenceError();
// } catch (err) {
//     console.log(err);
//     console.log("it\'s an error")
// }



// empty values in JS:
// NULL, undefined, empty string

// Null represents the intentional absence
// undefined, something hasnt been clearly defined yet
// (all funtions return undefined by default)


function addTwoNums(a, b) {
    try {
        if (typeof (a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof (b) != number) {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch (err) {
        console.log("Error!", err)
    }
}

addTwoNums("a", 2)
console.log("hehe")

// 任何给定的异常只会被离它最近的封闭 catch 块捕获一次。当然，在“inner”块抛出的任何新异常 （因为 catch 块里的代码也可以抛出异常），将会被“outer”块所捕获。
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch
try {
    try {
        throw new Error("oops");
    }
    catch (ex) {
        console.error("inner", ex.message);
        throw ex;
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.error("outer", ex.message);
}

  // Output:
  // "inner" "oops"
  // "finally"
  // "outer" "oops"
// 注意打印 console.error 和 console.log