const rateButtons = document.querySelectorAll(`.one, .two, .three, .four, .five`);
const submitButton = document.querySelector(`.submit`);
const hiddenDiv = document.querySelector(`.hidden`);
const selectedDiv = document.querySelector(`.selected`);

console.log(rateButtons);
console.log(submitButton);

const rateButtonsArr = Array.from(rateButtons);
console.log(rateButtonsArr);

// function isTrue(event) {
//     const rateButton = event.Target;
//     console.log(event.Target);
//     rateButton.getAttribute('ariaPressed') === 'true';
// }

// function changeColor(e) {
//     e.currentTarget.style.backgroundColor = `hsl(30.46deg 85.55% 54.22%)`;
//     e.currentTarget.style.color = `white`;
//     submitButton.style.color = `hsl(30.46deg 85.55% 54.22%)`;
//     submitButton.style.backgrounColor = `white`;
//     }

function changeColor(e) {
    const clickedButton = rateButtonsArr.find(element => element.id === `clicked`);
    if (clickedButton) {
        clickedButton.removeAttribute(`id`);
    }
    e.currentTarget.setAttribute(`id`, `clicked`);
}

function display() {
hiddenDiv.style.visibility = `visible`;
const chosenButton = rateButtonsArr.find(element => element.id === `clicked`);
selectedDiv.innerHTML = `You selected ${chosenButton.innerHTML} out of 5`;
}

rateButtonsArr.forEach((button) => button.addEventListener(`click`, changeColor));
submitButton.addEventListener(`click`, display)

// index = rateButtonsArr.findIndex((element) => element.ariaPressed = true);
// console.log(index);