const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const quantityInput = document.getElementById('quantityInput');

decreaseBtn.addEventListener('click', function() {
    let currentValue = parseInt(quantityInput.value);

    if (currentValue > 1) {
        currentValue -= 1;
        quantityInput.value = currentValue.toString(); // Convert to string before updating
    }
});

increaseBtn.addEventListener('click', function() {
    let currentValue = parseInt(quantityInput.value);

    if (currentValue < 209) {
        currentValue += 1;
        quantityInput.value = currentValue.toString(); // Convert to string before updating
    }
});
