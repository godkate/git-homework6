const firstNumber = prompt('Enter your first number');
const secondNumber = prompt('Enter your second number');
let action;
const result = `${firstNumber}+${secondNumber}=${action=(+firstNumber)+(+secondNumber)}
${firstNumber}-${secondNumber}=${action=firstNumber-secondNumber}
${firstNumber}*${secondNumber}=${action=firstNumber*secondNumber}
${firstNumber}/${secondNumber}=${action=firstNumber/secondNumber}`;
if (isNaN(+firstNumber) || isNaN(+secondNumber)) {
    alert(`Incorrect data`);
} else if (firstNumber === null || secondNumber === null) {
    alert(`Incorrect data`);
} else {
    alert(result);
}
