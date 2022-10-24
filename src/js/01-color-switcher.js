function getRandomHexColor() {   
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`; }

const goBtn = document.querySelector('[data-start]');
const cancelBtn = document.querySelector('[data-stop]');

let myTimer;

goBtn.addEventListener ("click",() => {
    myTimer = setInterval (() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);

goBtn.setAttribute ('disabled', true);
cancelBtn.removeAttribute ('disabled', false); 
});

cancelBtn.addEventListener ("click", () => {
    clearInterval(myTimer);

goBtn.removeAttribute('disabled', true);
cancelBtn.setAttribute  ('disabled', false); 
})