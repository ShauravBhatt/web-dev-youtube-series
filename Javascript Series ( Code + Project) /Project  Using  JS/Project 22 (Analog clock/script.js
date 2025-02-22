setInterval(() => {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    
    let hRotation = h*30+m*0.5;
    let mRotation = 6*m;
    let sRotation = 6*s;

    document.querySelector('.hour').style.transform = `rotate(${hRotation}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${mRotation}deg)`;
    document.querySelector('.second').style.transform = `rotate(${sRotation}deg)`;
}, 1000);