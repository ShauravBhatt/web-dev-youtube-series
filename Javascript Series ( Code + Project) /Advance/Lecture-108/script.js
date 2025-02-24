/******Using Getter and Setter in Classes **********/

class User {
  constructor(email, password) {
    this.email = email; //setter
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  // get password(){
  //     return `${this._password}abc`;
  // }

  // set password(value){
  //     this._password = value;
  // }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = `${value}abc`;
  }
}

const u1 = new User("shaurav@gmail.com", "xyz");
// console.log(u1._email); //we are calling directly variable here
// console.log(u1.email); //we are calling get method here
// console.log(u1._password);

/********Using Getters and Setters in Constructor Functions*********/

function User1(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return `${this._password}abc`;
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const u2 = new User1("bhatt@gmail.com", "xyz");
// console.log(u2.password);

/***** using Getters and Setters in Objects ******/

const myObj = {
  _email: "shaurav@google.com",
  _password: "xyz",

  set email(value) {
    this._email = value;
  },

  get email() {
    return this._email.toUpperCase();
  },

  get password() {
    return `${this._password}abc`;
  },

  set password(value) {
    this._password = value;
  }
};

// console.log(myObj.password);

const obj1 = Object.create(myObj);
obj1.email = "bhatt@gmail.com";
// console.log(obj1.email);
// console.log(myObj.email);

