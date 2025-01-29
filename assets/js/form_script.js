const forbiddenWords = [
    "unlimited",
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

        e.preventDefault();

        let wishCount = 0;
        let emptyInput;

        // Loop through the inputs and check for forbidden words
        for (let input of wishInputs) {

            // Testing for forbidden words
            const value = input.value.toLowerCase();
            const words = value.split(' ');
            for (let word of words) {
                if (word.length > 0) {
                    if (forbiddenWords.includes(word)) {
                        input.setCustomValidity('No wishing for infinite wishes!');
                        input.reportValidity();
                        return; // Return without submitting the form
                    } 
                } 
            }

            // Count this wish if not empty
            if (value.length > 0) {
                wishCount++;
            } else {
                emptyInput = input;
            }
        }

        console.log('Wish count:', wishCount);
        if (wishCount >= 2) {
            console.log('form is valid');
            //form.submit();
        } else {
            emptyInput.setCustomValidity('You must make at least 2 wishes!');
            emptyInput.reportValidity();
            return; // Return without submitting the form
        }

        // If we get here, the form is valid, so submit it
        // form.submit();
    });
});