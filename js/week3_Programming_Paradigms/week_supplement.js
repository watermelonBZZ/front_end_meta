// // Task 1: Code a Person class
// class Person {
//     constructor(name = "Tom", age = "20", energy = "100") {
//         this.name = name;
//         this.age = age;
//         this.energy = energy;
//     }
//     sleep() {
//         this.energy += 10
//     }
//     doSomethingFun() {
//         this.energy -= 10
//     }
// }

// // Task 2: Code a Worker class
// class Worker extends Person {
//     constructor(name, age, energy, xp = 0, hourlyWage = 10) {
//         super(name, age, energy)
//         this.xp = xp;
//         this.hourlyWage = hourlyWage
//     }

//     goToWork() {
//         this.xp += 10
//     }

// }

// // Task 3: Code an intern object, run methods
// function intern() {
//     intern = new Worker("Bob", 21, 110, 0, 10)
//     intern.goToWork()
//     return intern
// }

// // Task 4: Code a manager object, methods
// function manager() {
//     manager = new Worker("Alice", 30, 120, 100, 30)
//     manager.doSomethingFun()
//     return manager
// }



class Cake {
    constructor(lyr) {
        this.layers = lyr;
    }

    getLayers() {
        return this.layers;
    }
}


class WeddingCake extends Cake {
    constructor() {
        super(2);
    }

    getLayers() {
        return super.getLayers() * 5;
    }
}

var result1 = new Cake();
console.log(result1.getLayers());

var result = new WeddingCake();
console.log(result.getLayers());


// inheritance
// write super() before add new property in constructot of son class
class Animal {

}

class Dog extends Animal {
    constructor() {
        // super before add new property
        super()
        this.noise = "bark";
    }

    makeNoise() {
        return this.noise;
    }
}

class Wolf extends Dog {
    constructor() {
        super();
        this.noise = "growl";
    }
}

var result = new Wolf();
console.log(result.makeNoise());


// 
const [a, b] = [1, 2, 3, 4]
console.log(b)


// null is a datatype
function count(...food) {
    console.log(food)
}

count("Burgers", "Fries", null);


