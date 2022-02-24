const button = document.querySelector('#btn');
const time = document.querySelectorAll('.zeit');

let counter = 100;

button.addEventListener('click', () => {
  let countdown = setInterval(() => {
    time[0].textContent = `${counter}%`;
    counter--;

    if(counter < 0) {
      clearInterval(countdown);
    }
  },100);
});