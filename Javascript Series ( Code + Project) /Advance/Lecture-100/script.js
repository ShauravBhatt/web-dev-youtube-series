//Constructor Function

class Car{
    constructor(name,model){
        this.name = name;
        this.model = model;
    }
    print(){
        console.log(`This car of ${this.name} is of model ${this.model}`);
        console.log(this);
    }
}

const car2 = new Car("maruti", 800);
const car3 = new Car("swift", 1200);
// console.log(car2.print());
// console.log(car3.print());


function User(name,age,email){
    this.name = name;
    this.email = email;
    this.age = age;

    // return this;
}

function Users(){
    
}

const user1 = new User("shaurav", 19, "s@gmail.com");
const user2 = new User("bhatt", 19, "b@gmail.com");
console.log(user1.constructor);
console.log(user2 instanceof Users);