// DOM manipulatation
// location: console panel in browser
// GRAMMER:

// document.createlement("htmlElementName")

// htmlElementName.setAttribute('name(id, class)', 'value')

// document.body.appendChild("htmlElementName")

// how to find element with js in browser
// GRAMMAR
// document.querySelector("tagNameOfHtml")

// document.querySelectorALL("tagNameOfHtml")

// element is singular for Id, plural for class name
// document.getElementsByClassName("classValue")
// document.getElementById("IdValue")

// Event handling
// measure A
// step1:find the target html element
// const target = document.querySelector("tagNameOfHtml")

// step2:create function fName(){}

// step3:target.addEventListener("click", fName)

// measure B
// go elements window in inspect of browser
// right click the target html element, choose edit as html, then create attribute "onclick = 'fName()'"

var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

var h1 = document.querySelector('h1')

var arr = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
]

function handleClicks() {
    switch (h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1]
            break
        case arr[1]:
            h1.innerText = arr[2]
            break
        case arr[2]:
            h1.innerText = arr[3]
            break
        default:
            h1.innerText = arr[0]

    }
}

h1.addEventListener("click", handleClicks)

// JSON
// bin general, it's a quoted js object
// GRAMMAR

// A. convert json to js
// JSON.parse(jsonStr)

// B.convert js to json
// JSON.strinngify
// Noticablly, both keys and values are double quoted

// It's important to remember that while plain JavaScript objects can hold functions, JSON strings cannot.