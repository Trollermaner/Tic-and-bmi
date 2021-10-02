
const button = document.getElementById('calculateButton')
const output = document.querySelector('[output-id]')


button.addEventListener('click', calculateBMI)

let bmi = 0


function calculateBMI(){
    let weight = parseInt(document.querySelector('#weightInput').value)
    let height = parseInt(document.querySelector('#heightInput').value)
    bmi = weight / height / height * 10000
    bmiRounded = bmi.toFixed(1)
    if (isNaN(bmiRounded)){
        alert('please give a proper number to Weight or Height')
    }
    else{
        output.innerText=bmiRounded
    }
}

