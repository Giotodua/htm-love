const allInps = document.querySelectorAll(".form-control");
const inputOneValue = document.getElementById('inputOne');
const inputTwoValue = document.getElementById('inputTwo');
const btnCalculateValue = document.getElementById('btn-calculate');
const resultDiv = document.getElementById('result-div');
var contactCollection = [];
btnCalculateValue.addEventListener("click", () => {
    let percentage;
    
    if (inputOneValue.value == "" || inputTwoValue.value == "" ){
        
        console.log(inputOneValue)
    } else {
        percentage = Math.floor(Math.random() * 100 +
         1);
         resultDiv.innerHTML = `<h1>${percentage}% <h1>`;

         setTimeout(() =>{
            resultDiv.innerHTML = "";
            clearInputs()
         }, 4000);
    }


    // inputOneValue.value = "";
    // inputTwoValue.value = "";
})
function clearInputs(){
    allInps.forEach(item => {item.value = "";})
}



class contact {
    inputOne;
    inputTwo;
   
    constructor(inputOne, inputTwo,){
        this.inputOne = inputOne;
        this.inputTwo =  inputTwo;
    }
}
