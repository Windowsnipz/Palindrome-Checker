const inputText = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultText =  document.getElementById('result-text');

checkButton.addEventListener('click', checkWord);



function checkWord() {
    if (!isValidInput()) {
        resultText.innerText = '';
        alert('Please input a value');
    } else {
        renderResult();
    }
}

function isValidInput() {
    if (inputText.value == "") {
        return false;
    }
    return true;
}

function renderResult() {
    const text = inputText.value.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = text.split("").reverse().join("")
    if (text === reversed) {
        resultText.innerText = `${inputText.value} is a palindrome`;
    } else {
        resultText.innerText = `${inputText.value} is not a palindrome.`;
    }
}