//Object Oriented Programming

const myObj = {
    name:"shaurav",
    age:19
}
// console.log(obj.name);

//Class

class obj{
    constructor(name,model){
        this.name = name;
        this.model = model;
    }

    print = ()=>{
        console.log(`This ${this.name} car is of Model ${this.model}`);
        return "";
    }
}

const toyota = new obj("Toyota",2012);
const swift = new obj("Swift",2005);

// console.log(toyota.print());


//4 pillars of Object oriented programming Language 

// 1.) Encapsulation -> Extra Security

class Person{
    #secret;
    constructor(n,s){
        this.name = n;
        this.#secret = s;
    }
    getSecret = function(){
        return this.#secret;
    }

}

const person1 = new Person("Shaurav","YouTuber");
// console.log(person1.getSecret());


// 2.) Inheritence

class Animal{
    eat(){
        console.log('I can Eat');
    }
}

class Dog extends Animal{
    bark(){
        console.log('I can Bark');
    }
}

const Dog1 = new Dog();
// console.log(Dog1.bark()); 
// console.log(Dog1.eat());

// 3.) Abstraction -> Hiding the complex Details

class TV{
    on(){
        console.log("TV is ON !!");
        ((channel)=>{
            console.log(`Switching to channel number ${channel}`)
        })(101);
    }
}

const tv1 = new TV();
// console.log(tv1.on());

// 4.) Polymorphism -> A function used in many forms

class Shape{
    area(){
        console.log(`Calculating Area`);
        
    }
}

class circle extends Shape{
    area(){
        console.log('Calculating area of Circle');
    }
}

class square extends Shape{
    area(){
        console.log('Calculating area of Square');
    }
}

let shapes = [new Shape() , new square() , new circle()];
shapes.forEach((s)=>{
    s.area();
})