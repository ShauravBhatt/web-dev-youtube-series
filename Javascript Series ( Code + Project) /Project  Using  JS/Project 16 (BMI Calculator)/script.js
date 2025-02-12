const form = document.querySelector('form');
const result = document.querySelector('#output');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector("#weight").value);

    if (height === "" || height <= 0 || isNaN(height)) {
      result.innerText = "Please Insert Valid Height";
    } else if (weight === "" || weight <= 0 || isNaN(weight)) {
      result.innerText = "Please Insert Valid Weight";
    } else{
        let bmi = ((weight*10000)/(Math.pow(height,2)));
        result.innerHTML = `<span>Your BMI is : ${bmi.toFixed(2)}</span>`;
    }
    
})