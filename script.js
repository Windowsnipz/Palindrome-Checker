const inputText = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');


checkButton.addEventListener('click', checkWord);



function checkWord() {
    if (!isValidInput()) {
        alert('Please input a value')
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
    
}