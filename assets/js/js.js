function generatePassword() {
    // define password contents
    const lowerC = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialC = '!@#$%^&*(-+;/?><~[{,';
    const upperC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const allChar = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-+;/?><~[{,ABCDEFGHIJKLMNOPQRSTUVWXYZ';



    // define HTMLels
    const uppercaseEl = document.getElementById("uppercase");
    const lowercaseEl = document.getElementById("lowercase");
    const numbersEl = document.getElementById("numbers");
    const symbolsEl = document.getElementById("symbols");
    const lengthEl = document.getElementById("length");
    const resultEl = document.getElementById("result");

    const passlength = +lengthEl.value;

    let password = "";
    let chars = "";

    // if statements to call functions based on user input
    if (uppercaseEl.checked) {
        chars = chars + upperC;
    }
    if (lowercaseEl.checked) {
        chars = chars + lowerC;
    }
    if (numbersEl.checked) {
        chars = chars + numbers;
    }
    if (symbolsEl.checked) {
        chars = chars + specialC;
    } else {
        alert("Please make a selection");
    }

    for (i = 0; i < passlength; i++) {
        password = password + chars[Math.floor(Math.random() * chars.length)];

    }
    resultEl.innerHTML = password.slice(0, passlength);

    //function to copy password to clipboard

}

document.getElementById("clipboard").addEventListener("click", function() {

    document.getElementById("result").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!");

});