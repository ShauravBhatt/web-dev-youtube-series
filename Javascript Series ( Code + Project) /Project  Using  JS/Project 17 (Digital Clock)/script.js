const clock = document.querySelector("#clock");

// setInterval(() => {
//     const date = new Date();
//     const time = date.toLocaleTimeString();
//     clock.innerText = `${time}`;
// },1000)

setInterval(function() {
  const timestamp = Date.now();
  const customDate = new Date(timestamp);
  const time = customDate.toLocaleString("default", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });
  clock.innerText = `${time}`;
},1000);
