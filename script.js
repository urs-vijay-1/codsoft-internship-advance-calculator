 // Toggle between Arithmetic and Simple Interest Calculator modes
 function toggleCalculator() {
    const arithmeticMode = document.getElementById('arithmetic-mode');
    const interestMode = document.getElementById('interest-mode');
    const toggle = document.getElementById('toggle');
    
    if (toggle.checked) {
      arithmeticMode.classList.add('hidden');
      interestMode.classList.remove('hidden');
    } else {
      arithmeticMode.classList.remove('hidden');
      interestMode.classList.add('hidden');
    }
  }

  // Prevent negative numbers and non-numeric input for Simple Interest fields
  function validateInput(input) {
    input.value = input.value.replace(/[^0-9.]/g, '');  // Remove any non-numeric characters
    if (parseFloat(input.value) < 0) input.value = '';  // Clear if negative
  }

  // Arithmetic Calculator Logic
  let currentInput = '';
  let operation = null;
  let previousInput = '';

  const arithmeticDisplay = document.getElementById('arithmetic-display');

  function appendNumber(number) {
    currentInput += number;
    arithmeticDisplay.textContent = currentInput;
  }

  function setOperation(op) {
    if (currentInput !== '') {
      previousInput = currentInput;
      currentInput = '';
      operation = op;
      arithmeticDisplay.textContent = `${previousInput} ${operation}`;
    }
  }

  function calculate() {
    if (previousInput && currentInput && operation) {
      let result;
      const num1 = parseFloat(previousInput);
      const num2 = parseFloat(currentInput);
      switch (operation) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
      }
      arithmeticDisplay.textContent = result;
      currentInput = result.toString();
      previousInput = '';
      operation = null;
    }
  }

  function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    arithmeticDisplay.textContent = '0';
  }

  // Simple Interest Calculator Logic
  function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    if (!isNaN(principal) && !isNaN(rate) && !isNaN(time) && principal > 0 && rate > 0 && time > 0) {
      const interest = (principal * rate * time) / 100;
      document.getElementById('interest-result').textContent = `Simple Interest: ${interest.toFixed(2)}`;
    } else {
      document.getElementById('interest-result').textContent = 'Please enter valid positive values for all fields';
    }
  }