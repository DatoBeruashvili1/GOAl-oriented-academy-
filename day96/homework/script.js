function getCounterValue() {
    const savedValue = localStorage.getItem('counter');
    return savedValue ? parseInt(savedValue) : 0; //
  }

  
  function setCounterValue(value) {
    localStorage.setItem('counter', value);
    document.getElementById('counter-value').textContent = value;
  }


  function increment() {
    const currentValue = getCounterValue();
    setCounterValue(currentValue + 1);
  }

  function decrement() {
    const currentValue = getCounterValue();
    setCounterValue(currentValue - 1);
  }

  
  function reset() {
    setCounterValue(0);
  }

  
  window.onload = function() {
    const initialValue = getCounterValue();
    document.getElementById('counter-value').textContent = initialValue;
  };