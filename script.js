document.addEventListener("DOMContentLoaded", function(){
    const buttonsEl = document.querySelectorAll("button")
    const inputFieldEl = document.getElementById("result")
    for (let i = 0; i < buttonsEl.length ;i++){
        buttonsEl[i].addEventListener("click", ()=>{
            const buttonValue = buttonsEl[i].textContent

            if(buttonValue === "C"){
                clearResult()
            }else if(buttonValue === "="){
                calculateResult()
            }else{
                appendValue(buttonValue)
            }

        })
    }

    function clearResult(){
        location.reload()
    }
    function calculateResult(){ //eval get the results de lo que le ponés al parentesis
        inputFieldEl.value = eval(inputFieldEl.value)
    }
    function appendValue(buttonValue){
        inputFieldEl.value += buttonValue;
    }



})