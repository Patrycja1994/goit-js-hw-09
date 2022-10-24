import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const firstDelay = document.querySelector('input[name=delay]');
const delayStep = document.querySelector('input[name=step]');
const amountInput = document.querySelector('input[name=amount]');

const buttonSubmit = document.querySelector('button');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({position,delay});
    } else {
      reject({position,delay});
    }
  }, delay);
  });
}

function startPromises(e) {
  e.preventDefault();
   let step = delayStep.value;
   let delay = firstDelay.value;

for ( let i = 1; i < amountInput.value; i++) {
createPromise(i, step)   
.then(({ position, delay }) => {     
  Notify.success(`✅ Fulfilled promgise ${position} in ${delay}ms`);   
})   
.catch(({ position, delay }) => {    
   Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);   
});

  step += delay;
  }
};

form.addEventListener ('submit',startPromises);

