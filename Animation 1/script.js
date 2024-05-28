document.addEventListener('DOMContentLoaded', () => {
    const texts = ["OOPS...", "HELLO!", "WELCOME!", "GOODBYE!"];
    let index = 0;
    const animatedText = document.getElementById('animated-text');

    setInterval(() => {
        index = (index + 1) % texts.length;
        animatedText.setAttribute('data-text', texts[index]);
        animatedText.textContent = texts[index];
    }, 6000); // Matches the duration of the animation
});
