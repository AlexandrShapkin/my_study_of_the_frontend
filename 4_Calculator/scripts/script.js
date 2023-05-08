const result = document.getElementById("result");

function setListeners(){
    document.getElementById("clear-button").addEventListener("click", function(){
        result.value = '';
    });

    const clickHandler = function(){
        addToResult(this.value);
    };

    document.getElementById("one").addEventListener("click", clickHandler);
    document.getElementById("two").addEventListener("click", clickHandler);
    document.getElementById("three").addEventListener("click", clickHandler);
    document.getElementById("four").addEventListener("click", clickHandler);
    document.getElementById("five").addEventListener("click", clickHandler);
    document.getElementById("six").addEventListener("click", clickHandler);
    document.getElementById("seven").addEventListener("click", clickHandler);
    document.getElementById("eight").addEventListener("click", clickHandler);
    document.getElementById("nine").addEventListener("click", clickHandler);
    document.getElementById("zero").addEventListener("click", clickHandler);

    document.getElementById("plus").addEventListener("click", clickHandler);
    document.getElementById("minus").addEventListener("click", clickHandler);
    document.getElementById("multiply").addEventListener("click", clickHandler);
    document.getElementById("divide").addEventListener("click", clickHandler);
    document.getElementById("point").addEventListener("click", clickHandler);

    const calculateClickHandler = function() {
        calculate(result.value);
    };

    document.getElementById("calculate").addEventListener("click", calculateClickHandler);

    const keyDownHandler = function(e) {
        e.preventDefault();

        switch (e.key){
            case "0":
                addToResult(e.key);
                break; 
            case "1":
                addToResult(e.key);
                break; 
            case "2":
                addToResult(e.key);
                break; 
            case "3":
                addToResult(e.key);
                break; 
            case "4":
                addToResult(e.key);
                break; 
            case "5":
                addToResult(e.key);
                break; 
            case "6":
                addToResult(e.key);
                break; 
            case "7":
                addToResult(e.key);
                break; 
            case "8":
                addToResult(e.key);
                break; 
            case "9":
                addToResult(e.key);
                break; 
            case "0":
                addToResult(e.key);
                break;
            case "+":
                addToResult(e.key);
                break; 
            case "-":
                addToResult(e.key);
                break; 
            case "*":
                addToResult(e.key);
                break; 
            case "/":
                addToResult(e.key);
                break;
            case ".":
                addToResult(e.key);
                break;       
        }
        
        if (e.key === "Enter") {
            calculate(result.value);
        }

        if (e.key === "Backspace") {
            const resultValue = result.value;

            result.value = resultValue.substring(0, resultValue.length - 1);
        }
    };

    document.addEventListener("keydown", keyDownHandler);
}

function addToResult(value){
    if (!result.value){
        result.value = "";
    }
    result.value += value;
}

function calculate(value){
    const calculatedValue = eval(value || null);
    if (isNaN(calculatedValue)) {
        result.value = "Нельзя делить на 0";
        setTimeout(() => {
            result.value = "";
        }, 1300);
    } else if (calculatedValue == "Infinity"){
        result.value = "Бесконечность";
    } else {
        result.value = calculatedValue;
    }
}