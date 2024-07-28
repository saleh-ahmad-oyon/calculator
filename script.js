const displaySelector = f_calculator.display,
  oneSelector = document.querySelector('#one'),
  twoSelector = document.querySelector('#two'),
  threeSelector = document.querySelector('#three'),
  fourSelector = document.querySelector('#four'),
  fiveSelector = document.querySelector('#five'),
  sixSelector = document.querySelector('#six'),
  sevenSelector = document.querySelector('#seven'),
  eightSelector = document.querySelector('#eight'),
  nineSelector = document.querySelector('#nine'),
  zeroSelector = document.querySelector('#zero'),
  plusSelector = document.querySelector('#plus'),
  minusSelector = document.querySelector('#minus'),
  divisionSelector = document.querySelector('#division'),
  multiplicationSelector = document.querySelector('#multiplication'),
  grandTotalSelector = document.querySelector('#grandTotal'),
  resetSelector = document.querySelector('#reset');

// Data Flag for the Calculation
class Counter {
  static hasData = false;
}

// Load All Event Listeners
class EventListeners {
  // Add Number
  static addNumber = number => {
    if (!Counter.hasData) {
      displaySelector.value = number;
    } else {
      displaySelector.value += number;
    }
    
    Counter.hasData = true;
  }

  // Add Sign
  static addSign = sign => {
    const displayVal = displaySelector.value,
      displayValLastChar = displayVal.charAt(displayVal.length - 1);

    if (sign !== '-' && displayVal.length === 0) return;
  
    switch(displayValLastChar) {
      case '+':
      case '-':
      case '/':
      case '*':
        displaySelector.value = displayVal.substring(0, displayVal.length - 1);
        displaySelector.value += sign;
        break;
      default:
        displaySelector.value += sign;
    }

    Counter.hasData = true;
  }
  
  // Calculate Grand Total
  static grandTotal = () => {
    displaySelector.value = eval(displaySelector.value);
    Counter.hasData = false;
  }
  
  // Reset All
  static resetAll = () => {
    displaySelector.value = '';
    Counter.hasData = false;
  }

  static load() {
    oneSelector.addEventListener('click', EventListeners.addNumber.bind(null, '1'));
    twoSelector.addEventListener('click', EventListeners.addNumber.bind(null, '2'));
    threeSelector.addEventListener('click', EventListeners.addNumber.bind(null, '3'));
    fourSelector.addEventListener('click', EventListeners.addNumber.bind(null, '4'));
    fiveSelector.addEventListener('click', EventListeners.addNumber.bind(null, '5'));
    sixSelector.addEventListener('click', EventListeners.addNumber.bind(null, '6'));
    sevenSelector.addEventListener('click', EventListeners.addNumber.bind(null, '7'));
    eightSelector.addEventListener('click', EventListeners.addNumber.bind(null, '8'));
    nineSelector.addEventListener('click', EventListeners.addNumber.bind(null, '9'));
    zeroSelector.addEventListener('click', EventListeners.addNumber.bind(null, '0'));
    plusSelector.addEventListener('click', EventListeners.addSign.bind(null, '+'));
    minusSelector.addEventListener('click', EventListeners.addSign.bind(null, '-'));
    divisionSelector.addEventListener('click', EventListeners.addSign.bind(null, '/'));
    multiplicationSelector.addEventListener('click', EventListeners.addSign.bind(null, '*'));
    grandTotalSelector.addEventListener('click', EventListeners.grandTotal);
    resetSelector.addEventListener('click', EventListeners.resetAll);
  }
}

EventListeners.load();
