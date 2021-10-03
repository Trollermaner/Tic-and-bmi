
const button = document.getElementById('calculateButton')
const output = document.querySelector('[output-id]')
const changeBtn = document.getElementById('changeBtn')
const weightM = document.getElementById('weightInput')
const heightM = document.getElementById('heightInput')
const weightI = document.getElementById('weightInputImp')
const heightFeetInput = document.getElementById('heightInputImpFt')
const heightInchesInput = document.getElementById('heightInputImpIn')
const enterBtn = document.getElementById('enter')


button.addEventListener('click', calculateBMI)
changeBtn.addEventListener('click',changeSystem)


function enter(e){
    if(e.key === 'Enter'){
        calculateBMI()
    }
}

enterBtn.addEventListener('keypress', enter)


let bmi = 0
let system = true



function calculateBMI(){
    if(system){
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
    }else{
        let weight = parseInt(document.querySelector('#weightInputImp').value)
        let heightFeet = parseInt(document.querySelector('#heightInputImpFt').value)
        let heightIn = parseInt(document.querySelector('#heightInputImpIn').value)
        inches = (heightFeet * 12) + heightIn
        bmi = weight /inches /inches * 703
        bmiRounded = bmi.toFixed(1)
        if(isNaN(bmiRounded)){
            alert('please give a proper number to Weight or Height')
        }
        else{
            output.innerText=bmiRounded
        }
    }
}

function changeSystem(){
    let imperial = document.getElementById('imperial-id') 
    let metric = document.getElementById('metric-id') 
    if(system){
        imperial.classList.add('show')
        metric.classList.remove('show')
        changeBtn.innerText = 'Change to Metric System'
        
        system = false

    }
    else if(system===false){
        metric.classList.add('show')
        imperial.classList.remove('show')
        changeBtn.innerText = 'Change to Imperial System'
        system = true
    }
}
