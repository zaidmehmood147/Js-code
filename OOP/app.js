// // class Students { // The "Cutter"
// //     constructor(sname, sage) {
// //         this.sname = sname; 
// //         this.sage = sage;
// //     }
// // }
// // const student1 = new Students("ali", 20); // Cookie 1
// // const student2 = new Students("bilal", 30); // Cookie 2

// // console.log(Students)


// // class Students{
// // constructor(uname,age){
// // this.uname = uname ;
// // this.age = age ; 
// // }
// // }

// // const  =  new Students("zaid" , 101)
// // const  = new Students("zed", 420)


// // console.log(Students)


// The 4 Pillars (The "Rules" of OOP)
// Your notes mention 4 pillars. Let's break them down simply:

// A. Abstraction (Keep it Simple)
// When you drive a car, you press the gas pedal and it goes. Do you need to know 
// how the fuel injector is spraying gas into the engine? No. You just need the pedal.

// Meaning: Hide the complex inner workings and only show the "buttons" the user needs.

// B. Inheritance (Family Tree)
// If your Dad has blue eyes, you might get blue eyes too.

// Meaning: A "Child" class can take (inherit) all the features of a "Parent" 
// class so you don't have to write them again.

// In your code: class ChildClass extends ParentClass. The child gets everything the parent has for free!

// C. Encapsulation (Private & Secure)
// Think of a Capsule (pill). The medicine is inside, protected by the shell. 
// You can't touch the powder inside directly.

// Meaning: Keeping data safe inside the object so outside code can't accidentally mess it up.

// In your code: The #money in your MoneyChecker class. The # makes it private. 
// If you try to change it from outside, the code will yell at you. This is for security.

// D. Polymorphism (Many Shapes)
// The word "Poly" means many, and "Morph" means shape.

// Example: Think of a "Smartphone." For one person, it’s a Camera. F
// or another, it’s a Game Console. For another, it’s a Phone. It’s the same device acting in different ways.

// In your code: You have a details() method in a Parent class. The Child class can have its own 
// version of details(). Even though they have the same name, they do different things depending on who calls them.




// Class: The Blueprint (The Plan).

// Object: The Reality (The Thing you built).

// Constructor: The "Birth" of the object—where you set the name and age.

// this: A way for the object to talk about itself ("My name is...").

// 1. Abstraction

class CoffeeMachine {
    #boilWater() { // Private: The user doesn't need to see this
        return "Water is not boiling at 100°C...";
    }

    makeCoffee() { // Public: This is the only button the user sees
        console.log(this.#boilWater());
        console.log("Adding beans... Coffee is ready! ☕");
    }
}

const myMachine = new CoffeeMachine();
myMachine.makeCoffee(); 
myMachine.#boilWater(); // ERROR: You can't toucsh this!


class Coffee{
    boilingpoint(){
        return "boiling point of water is 100 degree"
    }

    rice(){
        console.log(this.boilingpoint)
    }
}
const machine = new Coffee(
)
console.log("console working")
console.log(machine)

