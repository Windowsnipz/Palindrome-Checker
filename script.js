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
    const text = inputText.value;
    const reversed = text.split("").reverse().join("")
    if (text === reversed) {
        resultText.innerText = `"${text}" is a palindrome!`;
    } else {
        resultText.innerText = `"${text}" is not a palindrome.`;
    }
}