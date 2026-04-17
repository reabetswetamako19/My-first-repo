// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function toggleTheme() {
    const body = document.body;
    const toggleInput = document.getElementById('theme-toggle');
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        toggleInput.checked = true;
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        toggleInput.checked = false;
    }
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if ((key >= '0' && key <= '9') || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
        appendToDisplay(key);
        event.preventDefault();
    } else if (key === 'Enter') {
        calculate();
        event.preventDefault();
    } else if (key === 'Escape' || key.toLowerCase() === 'c') {
        clearDisplay();
        event.preventDefault();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
        event.preventDefault();
    }
});
