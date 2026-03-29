// oop

// befor OOP
// code hard to read
// hard to reuseable
// extend  issues
// hard to maintain

// es5 (classes - blueprint)
// class students (name,age,sub,class,id,roll)
// Object
// student1 (age,id)
// OOP = classes + object(properties or data ,method)


// classes + object = OOP
// javascript ->multi paradigm , imperative(;),event-driven
// paradigm -> way to code

// OOP -> object oriented programming
// 4 pillars 
// 1.Abstraction
// 2.Inherit
// 3.encapsulation
// 4.polymorphism


// functional base
// function data(){
//     console.log("inside func")
// }
// data()

// class base
class Students{
    constructor(sname,sage,sclass,sid,sroll){
this.sname=sname,
this.sage=sage,
this.sclass=sclass,
this.sid=sid,
this.sroll=sroll
    }
studentData(){
    console.log(`std name is ${this.sname} and age is ${this.sage} `)
}
}
// object (instance)
const student1 = new Students("ali",20)
const student2 = new Students("bilal",30)
student1.studentData()
student2.studentData()