const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

const resButtons = document.querySelector('#reset');

const winnerScore = document.querySelector('#playto');


let p1Score = 0;
let p2Score = 0;
let winScore = 3;

let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Button.setAttribute('disabled' , 'true');
            p2Button.setAttribute('disabled' , 'true');
        }
        p1Display.textContent = p1Score;
    }
})

winnerScore.addEventListener('change' , function()
{
    winScore = parseInt(this.value);
    reset();
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winScore) {
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1Button.setAttribute('disabled' , 'true');
            p2Button.setAttribute('disabled' , 'true');
        }
        p2Display.textContent = p2Score;
    }
})

resButtons.addEventListener('click', reset);


function reset()
{
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success' , 'has-text-danger');
    p2Display.classList.remove('has-text-danger' , 'has-text-success');
    p1Button.removeAttribute('disabled' , 'false');
    p2Button.removeAttribute('disabled' , 'false');
}