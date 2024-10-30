const inputs = document.querySelectorAll('.otp-input');

inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
            inputs[index - 1].focus();
        }
    });
});

document.getElementById('submitBtn').addEventListener('click', function() {
    const passcode = Array.from(inputs).map(input => input.value).join('');
    if (passcode === '241265') {
        window.location.href = 'countdown.html';
    } else {
        alert('Incorrect Passcode');
    }
});