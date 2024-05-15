// Event listener
document.addEventListener('DOMContentLoaded', (event) => {
    const inputField = document.getElementById('inputString');
    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            reverseString();
        }
    });
});

// Reverse function
function reverseString() {
    const inputString = document.getElementById('inputString').value;
    const output = document.getElementById('output');

    if (inputString === "") {
        output.textContent = "Die Eingabe ist leer.";
    } else {
        output.textContent = inputString.split('').reverse().join('');
    }
}
