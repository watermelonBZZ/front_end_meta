// WHAT IS NPM AND NODE.JS
// node.js and NPM(node package management)
// The package manager allows you to use a large number of libraries and frameworks as Node.js modules.
// command line (e.g, shell, terminal)

// WHAT IS TESTING
// Testing is how you verify the expectations you have regarding the behavior of your code.


// GOALS:

// 1.WHT TEST
// Testing is how you verify the expectations you have regarding the behavior of your code.
// you can run it as many times as you want. You can run the testing code automatically. The tests can be repeated without significant cost in time or effort.

// 2.what is red green refracrtor cycle
// First, you write a failing test, then you write your source code so that the previously failing test now passes. Finally, you optimize your source code without changing its results.

// 3.differentiate manual and automated testing

// 4.unit testing
// Unit testing is the process of testing the smallest units of your source code in isolation.

// jest test(a kind of framework)
// expect(fuctionName()).tobe()


// As you continue to refine your code in response to red tests, it becomes a cyclical activity.
// red green refractor cycle, basis of test-driving development

// 3 types of testing
// e2e, integration, unit
// a. end-to-end
// it veritfies the interaction between the development and users
// the person who does this test does not have to be a professional developper
// slowest and most expensive

// b. integration
// how parts of your system interact with other parts of your system. In other words, it's testing how separate parts of your apps work together.
// average speed and expense

// unit
// Unit testing is the process of testing the smallest units of your source code in isolation.
// highest speed and the lowest cost

// Jest is a JavaScript testing framework.
// three features: code coverage, mocking, snapshot
// It's often used for testing code like React.
// 1. Code coverage provided by jest is a measure of what percentage of my code is covered by tests.

// 2.Mocking allows you to separate the code that you are testing from it's related dependencies.
// Mocks, allow you to pretend that the needed data are already there.

// 3. Jest allows you to perform snapshot testing. Snapshot testing is used by developers to verify that there are no regressions in the DOM of our apps after some changes to the code base are made.

// to set npm in function file
// npm init -y

// to install jest in package.js file
// npm install --save-dev jest
// 1.查看npm镜像设置
// npm config get registry
// 2.将npm设置为淘宝镜像
// npm config set registry https://registry.npm.taobao.org
// 3.再次查看npm镜像设置
// npm config get registry

// after running npm command, a package.json file will be created
// The package.json file holds all the instructions on all the node modules that are pulled from the npm repository of open source modules.
// This file can be shared to co-work with others, as it can help to install node packages and exact same setup on their machines when readed

// test example
// 1. write function and module.exports = fName

// 2.create a test file called fName.test.js

// const addFive = require(`./addFive`);
// `./`indicates the function is in the same fold with test file

// test('statement description', () => {
//     expect(fName(ARG)).toBe(GOAL)
// })

//3. change the "test" value to "jest"in "scripts" in package.json

// 4. type "npm run test" in terminal to see the result


// TDD(test-driven development)
// green:pass, red:fail

// Refactoring is the process in which I write my feature code so that it runs more efficiently or that it's easier to read and thus easier to understand for other programmers on the team.

