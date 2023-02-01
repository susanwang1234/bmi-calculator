const calculateBtn = document.getElementById('calc-btn');
const resetBtn = document.getElementById('reset-btn');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');

const resultArea = document.getElementById('result');

const resetInputs = () => {
    heightInput.value = '';
    weightInput.value = '';
}

const calculateBmi = () => {
    const enteredHeight = +heightInput.value; //The unary plus (+) operator precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already. 
    const enteredWeight = +weightInput.value;

    const bmi = enteredWeight / (enteredHeight * enteredHeight);

    console.log(bmi);
    if (isNaN(bmi)) {
        alert('Not a number, please check inputs!');
        return;
    }

    const resultElement = document.createElement('ion-card');
    resultElement.innerHTML = `
        <ion-card-content>
        <h2>${bmi}</h2>
        </ion-card-content>
    `;
    resultArea.innerHTML = '';
    resultArea.appendChild(resultElement);
};

calculateBtn.addEventListener('click', calculateBmi);
resetBtn.addEventListener('click',resetInputs);

