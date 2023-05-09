const generatorFunctions = {
    lowercase: function() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    },
    uppercase: function() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    },
    number: function() {
        return +String.fromCharCode(Math.floor(Math.random() * 26) + 48);
    },
    symbol: function() {
        const symbols = "!@#$%^&*(){}[]=<>/,.";
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
};


document.getElementById("body").onload = function() {
    document.getElementById("generateButton").addEventListener("click", function() {
        document.getElementById("result").value = generatePassword(
            document.getElementById("includeLowercase").checked,
            document.getElementById("includeUppercase").checked,
            document.getElementById("includeSymbols").checked,
            document.getElementById("includeNumbers").checked,
            document.getElementById("passwordLength").value
        );
    });

    document.getElementById("copy").addEventListener("click", function(e) {
        e.preventDefault();
        document.execCommand("copy", false, document.getElementById("result").select());
    });
}

function generatePassword(lowercase, uppercase, symbol, number, passwordLength) {
    let password = "";

    const picked = [{lowercase}, {uppercase}, {symbol}, {number}].filter(
        (item) => Object.values(item)[0]
    );

    const pickedCount = picked.length;

    if (pickedCount == 0) {
        return "";
    }

    for (let i = 0; i < passwordLength; i+=pickedCount){
        picked.forEach((item) => {
            const funcName = Object.keys(item)[0];
            password += generatorFunctions[funcName]();
        });
    }

    return password.slice(0, passwordLength);
}