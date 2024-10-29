const form = document.getElementById('theForm');
const nameInput = document.getElementById('name');
const numberInput = document.getElementById('number');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const cvcInput = document.getElementById('cvc');

const nameError = document.getElementById('nameError');
const numberError = document.getElementById('numberError');
const dateError = document.getElementById('dateError');
const cvcError = document.getElementById('cvcError');

nameInput.addEventListener('input', () => {
    document.getElementById('cardFinalName').innerHTML = nameInput.value || "The Name";
});

numberInput.addEventListener('input', () => {
    // Limit to digits only, and restrict to 16 characters
    numberInput.value = numberInput.value.replace(/\D/g, '').slice(0, 16);

    // Format the value with spaces for display on the card
    let formattedNumber = numberInput.value.replace(/(\d{4})(?=\d)/g, '$1 ');

    // Update the card display with formatted value
    document.getElementById('cardFinalNumber').innerHTML = formattedNumber || "0000 0000 0000 0000";
});


cvcInput.addEventListener('input', () => {
    if (cvcInput.value.length > 3) {
        cvcInput.value = cvcInput.value.slice(0, 3); // Limit to 3 digits
    }
    // Add the numbers to the Card
    document.getElementById('cardFinalcvc').innerHTML = cvcInput.value || '000';
});


// Clear error on user input
const clearErrorOnInput = (input, error, minLength) => {
    input.addEventListener('input', () => {
        if (input.value.length >= minLength) {
            error.style.display = 'none';
        }
    });
};

// Attach event listeners for dynamic error clearing
clearErrorOnInput(nameInput, nameError, 10);
clearErrorOnInput(numberInput, numberError, 12);
clearErrorOnInput(cvcInput, cvcError, 3);

// Clear date error on selection
monthInput.addEventListener('change', () => {
    if (monthInput.value !== 'MM' && yearInput.value !== 'YY') {
        dateError.style.display = 'none';
    }
    // Add the numbers to the Card
    document.getElementById('cardFinalMonth').innerHTML = monthInput.value || '00';
});

yearInput.addEventListener('change', () => {
    if (monthInput.value !== 'MM' && yearInput.value !== 'YY') {
        dateError.style.display = 'none';
    }
    // Add the numbers to the Card
    document.getElementById('cardFinalYear').innerHTML = yearInput.value || '00';
});

// Form submit validation
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Name validation
    if (nameInput.value.length < 10) {
        nameError.style.display = 'block';
        return;
    }

    // Number validation
    if (numberInput.value.length < 12) {
        numberError.style.display = 'block';
        return;
    }

    // Date validation
    if (monthInput.value === "" || yearInput.value === "") {
        dateError.style.display = 'block';
        return;
    }

    // CVC validation
    if (cvcInput.value.length !== 3) {
        cvcError.style.display = 'block';
        return;
    }

    // Form is valid; proceed with submission or further actions
    // alert('Form submitted successfully!');
    form.style.display = 'none';
    document.getElementById('thankYou').style.display = 'flex';
});



















// const form = document.getElementById('theForm');
// const nameInput = document.getElementById('name');
// const numberInput = document.getElementById('number');
// const monthInput = document.getElementById('month');
// const yearInput = document.getElementById('year');
// const cvcInput = document.getElementById('cvc').value;

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     // Clear previous error messages
//     document.getElementsByClassName('errorMessage').style.display = 'none';

//     if (nameInput.value.length < 10) {
//         nameError.style.display = 'block';
//         return; // Prevent form submission
//     }
//     nameError.style.display = 'none';
//     if (numberInput.value.length < 12) {
//         numberError.style.display = 'block';
//         return; // Prevent form submission
//     }
//     nameError.style.display = 'none';
//     if (monthInput.value === "MM" || yearInput.value === "YY") {
//         dateError.style.display = 'block';
//         return;
//     }

// });


