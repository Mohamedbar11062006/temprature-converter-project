let tempratureValue = 0;
let tempratueUnit;
function convertToCelesius(){
    let userInput = document.getElementById("tempratureInput").value;
    const result = ((Number(userInput) - 32) * (5/9)) ;
    document.getElementById("resultDisplay").innerText = result.toFixed(2) + "C"
}
function convertToFehrenheit(){
    const userInput = document.getElementById("tempratureInput").value;
    const result = (Number(userInput)*(9/5)+32);
    document.getElementById("resultDisplay").innerText = result.toFixed(2) + "F";
}