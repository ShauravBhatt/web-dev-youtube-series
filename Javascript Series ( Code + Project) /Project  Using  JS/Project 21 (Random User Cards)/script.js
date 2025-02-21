const name = document.querySelector("#user-name");
const email = document.querySelector("#user-email");
const pic = document.querySelector("#user-pic");
const nextButton = document.querySelector("#next-button");
const title = document.querySelector('#main-title');

function updateCard(data){
    nextButton.innerText = `Generate Next`;
    pic.setAttribute('src',`${data.results[0].picture.medium}`);
    name.innerText = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;
    email.innerText = `${data.results[0].email}`
}

nextButton.addEventListener('click',()=>{
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://randomuser.me/api/");
    xhr.onload = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            const data = JSON.parse(xhr.responseText);
            updateCard(data);
        }else{
            console.log("Data can't be retrieved !!")
        }
    }
    xhr.send();
})

setTimeout(()=>{
    title.innerText = `(Generate Random User Details In Single Click !!)`;
},1000)