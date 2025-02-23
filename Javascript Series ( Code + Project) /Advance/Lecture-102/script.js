function setUsername(username){
    //complex execution
    this.username = username;    
}

function createUser(username,email,age){

    setUsername.call(this, username);

    this.email = email;
    this.age = age;
}

const u1 = new createUser("shaurav404","bhatt@google.com",19);
console.log(u1);