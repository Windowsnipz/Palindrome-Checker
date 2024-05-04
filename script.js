const inputText = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');


checkButton.addEventListener('click', checkWord);



function checkWord() {
    if (!isValidInput()) {
        alert('Please input a value')
    } else {
        alert('Value entered! Good job!')
    }
}

function isValidInput() {
    if (inputText.value == "") {
        return false;
    }
    return true;
}
