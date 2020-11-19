(function clickTxtHandler() {
    const element = document.querySelector('.txt');
    element.addEventListener('click', () => {
        element.textContent = 'Clicked';
    })
})();

(function clickBtnHandler() {
    const buttons = document.querySelectorAll('.btn');

    //a querySelectorAll egy Nodelist-et ad vissza attribute node text node nem tomb, object
    // const buttonsArray = Array.from(buttons);
    // console.log(buttons);
    // console.log(buttonsArray);
    for (let i = 0; i < buttons.length; i += 1) {
        buttons[i].addEventListener('click', (event) => {
            console.log(event.target.textContent);
            console.log('Clicked button', i);
        })
    }
})();



// changeStyle
// logTarget
// doSomething
// clikckHandler (changeStyle,logTarget,doSomething)
// show, hide
//event.stopPropagation
//event delegation

const logCurrentTarget = (event) => {
    console.log(event.currentTarget);
}

(function bubbling() {
    const divs = document.querySelectorAll('.first, .second, .third');
    const events = ['click', 'mouseover'];
    for (let i = 0; i < divs.length; i++) {
        for (let j = 0; j < events.length; j += 1) {
            divs[i].addEventListener(events[j], logCurrentTarget)
        }
    }
})()