fetch("https://jsonplaceholder.typicode.com/users/")
.then((raw_data)=>{
    return raw_data.json();
})
.then((data)=>{

    console.log(data[1].name);
})

// Documentation Link : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API