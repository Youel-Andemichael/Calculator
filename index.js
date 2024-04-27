// Variables to store the operands and operator
let operand1 = '';
let operand2 = '';
let currentOperator = null;

// Arithmetic functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const power = (a, b) => Math.pow(a, b);

const handleNumberClick = (event) => {
  const number = event.target.textContent;
  if (currentOperator) {
    if (number === '0' && operand2 === '') {
      operand2 = '0';  // Only allow one leading zero
    } else if (number !== '0' || operand2 !== '0') {
      operand2 = (operand2 === '0' ? '' : operand2) + number;
    }
  } else {
    if (number === '0' && operand1 === '') {
      operand1 = '0';  // Only allow one leading zero
    } else if (number !== '0' || operand1 !== '0') {
      operand1 = (operand1 === '0' ? '' : operand1) + number;
    }
  }
  updateDisplay(); // Function to update display
};
function updateDisplay() {
  let displayValue = operand1 + (currentOperator ? ' ' + currentOperator + ' ' : '') + operand2;
  document.getElementById('display').textContent = displayValue;
}

const handleOperatorClick = (event) => {
  if (operand1 !== '') {
    if (operand2 === '') {
      currentOperator = event.target.textContent;  // Allow operator change if no second operand has been entered
    } else {
      performCalculation();  // Perform the calculation with the first operator and operands
      currentOperator = event.target.textContent;  // Set new operator for further calculations
    }
    operand2 = ''; // Prepare for the next number input
  }
};

// Function to perform calculations
const performCalculation = () => {
  const num1 = parseFloat(operand1);
  const num2 = parseFloat(operand2);
  let result;

  // If an operator is selected and valid numbers are entered
  if (currentOperator && !isNaN(num1) && !isNaN(num2)) {
    switch (currentOperator) {
      case '+':
        result = add(num1, num2);
        break;
      case '-':
        result = subtract(num1, num2);
        break;
      case 'x': 
        result = multiply(num1, num2);
        break;
      case '/':
        if (num2 === 0) {
          document.getElementById('display').textContent = 'Error';
          return; // Early exit
        }
        result = divide(num1, num2);
        break;
      case '^':
        result = power(num1, num2);
        break;
      default:
        throw new Error('Invalid operator');
    }
    document.getElementById('display').textContent = result; // Update display with result
    operand1 = result.toString(); // Set up for next calculation
    operand2 = ''; // Reset second operand
    currentOperator = null; // Reset operator
  } else {
    document.getElementById('display').textContent = 'Error';
  }
};


// Function to clear all input fields or variables
const clearAll = () => {
  operand1 = '';
  operand2 = '';
  currentOperator = null;
  document.getElementById('display').textContent = '0'; // Reset display
};

// Get references to number and operator buttons, and add event listeners
document.querySelectorAll('.number').forEach(button => {
  button.addEventListener('click', handleNumberClick);
});
document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', handleOperatorClick);
});
document.getElementById('equals-button').addEventListener('click', performCalculation);
document.getElementById('clear-button').addEventListener('click', clearAll);
