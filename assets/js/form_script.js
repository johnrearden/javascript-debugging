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
    const wishInputs = document.querySelectorAll('.wish-input');
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let wishCount = 0;

        for (let input of wishInputs) {
            const value = input.value.toLowerCase();
            const words = value.split(' ');
            for (let word of words) {
                if (forbiddenWords.includes(word)) {
                    input.setCustomValidity('No wishing for infinite wishes!');
                    input.reportValidity();
                    return;
                }
            }
            if (value.length > 0) {
                wishCount++;
            }
            if (value.length === 0 && wishCount < 2) {
                console.log(input.id);
                input.setCustomValidity('You must make at least 2 wishes!');
                input.reportValidity();
                return;
            }
        }
        form.submit();
    });
});