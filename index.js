let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenvalue = '';
for (item of buttons) {
    item.addEventListener('click', e => {
        buttontext = e.target.innerText;
        console.log("button text is", buttontext);
        if (buttontext == 'x') {
            buttontext = '*';
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
        else if (buttontext == 'C') {
            screenvalue = "";
            screen.value = screenvalue;

        }
        else if (buttontext == 'AC') {
            screenvalue = "0";
            screen.value = screenvalue;

        }
        else if (buttontext == '=') {
            screenvalue = eval(screenvalue);
            screen.value = screenvalue;
        }
        else {
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
    })
}