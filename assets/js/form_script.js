const forbiddenWords = [
    "unlimied",
    "boundless",
    "endless",
    "limitless",
    "eternal",
    "never-ending",
    "unbounded",
    "ceaseless",
    "infinite",
    "interminable",
    "unlimited",
    "incalculable",
    "unquantifiable",
    "immeasurable",
    "countless",
    "uncountable",
    "perpetual",
    "timeless",
    "everlasting",
    "unending",
    "unfathomable",
    "vast",
    "cosmic"
  ];
  

document.addEventListener('DOMContentLoaded', () => {

    // Get references to the input elements and the form
    const wishInputs = document.querySelectorAll('.wish-input');
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {

        let wishCount = 0;

        // Loop through the inputs and check for forbidden words
        for (let input of wishInputs) {
            const value = input.value.toLowerCase();
            const words = value.split(' ');
            for (let word of words) {
                if (forbiddenWords.includes(word)) {
                    input.setCustomValidity('No wishing for infinite wishes!');
                    input.reportValidity();
                    return; // Return without submitting the form
                }
            }
            if (value.length > 0) {
                wishCount++;
            }

            // If this input is empty and less than 2 wish inputs have been filled, show an error
            if (value.length === 0 && wishCount < 2) {
                input.setCustomValidity('You must make at least 2 wishes!');
                input.reportValidity();
                return; // return without submitting the form
            }
        }

        // If we get here, the form is valid, so submit it
        form.submit();
    });
});