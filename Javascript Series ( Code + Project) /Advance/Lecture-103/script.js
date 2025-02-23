// class User {
//     constructor(name,email,password){
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }

//     logMe(){
//         console.log(`User is : ${this.name.toUpperCase()}`);
//     }

//     encryptPassword(){
//         console.log(`Password is : ${this.password}abc`);
//     }
// }

// const u1 = new User("shaurav","shaurav@gmail.com",123);
// u1.encryptPassword();

//Behind the Scene

// function User(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.logMe = function () {
//     console.log(`User is : ${this.name.toUpperCase()}`);
// }

// User.prototype.encryptPassword = function () {
//     console.log(`Password is : ${this.password}abc`);
// }

// const u1 = new User("shaurav", "shaurav@gmail.com", 123);
// // console.log(u1);
// u1.logMe();
// u1.encryptPassword();


class Hero {
    constructor(name){
        this.name = name;
    }

    logMe(){
        console.log(`${this.name} is a Superhero !!`)
    }
}

class Power extends Hero{
    constructor(name,ability){
        super(name);
        this.ability = ability;
    }

    logPower(){
        console.log(`${this.name} is a superhero having power of ${this.ability} !!`);
    }
}

const h1 = new Power("Shaurav","Coding");
const h2 = new Hero("shaurav");
// console.log(h1);
// h1.logPower();
// h1.logMe();
// console.log(h2)
// h2.logMe();
// h2.logPower();

// console.log(Hero === Power);

class Maths{
    static PI = 3.14156 ;
    static square(num){
        return num*num;
    }
}

class User extends Maths{
    constructor(num){
        super(num);
    }
}

// console.log(Maths.square(2));
// console.log(Maths.PI);

// const one = new Maths();
// console.log(one.PI);
// console.log(one.square(3));

const num1 = new User(4);
console.log(num1.square());