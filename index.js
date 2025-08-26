  function calculateTip(billAmount, tipPercentage) {
    return billAmount * (tipPercentage / 100);
  }
console.log(calculateTip(100, 10)); // Output: 10
console.log(calculateTip(1524.33, 25)); // Output: 381.0825