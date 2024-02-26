



function appendToDisplay(value) {
    document.forms[0].display.value += value;
}


function clearDisplay(value) {
    if (value === 'AC') {
        document.forms[0].display.value = '';
    } else if (value === 'DEL') {
        document.forms[0].display.value = document.forms[0].display.value.slice(0, -1);
    }
}


function calculate() {
    try {
        let result = eval(document.forms[0].elements["display"].value);
        document.forms[0].elements["display"].value = result;
    } catch (error) {
        document.forms[0].elements["display"].value = "Error";
    }
} 