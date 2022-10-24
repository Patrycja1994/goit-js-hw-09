import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const datePicker = document.getElementById('datetime-picker');

const startBtn = document.querySelector('[type = "button"]');

const dayPicker = document.querySelector('[data-days]');
const hoursPicker = document.querySelector('[data-hours]');
const minutesPicker = document.querySelector('[data-minutes]');
const secondsPicker = document.querySelector('[data-seconds]');

const date = new Date();

const options = { 
    enableTime: true, 
    time_24hr: true, 
    defaultDate: new Date(), 
    minuteIncrement: 1, 
        onClose(selectedDates) { 
            if (selectedDates[0] < new Date()) {
                startBtn.disabled = true;
                Notify.warning('Please choose date in the future');
            } else if (selectedDates[0] > new Date()) {
                startBtn.disabled = false;
            }
        }, 
    };

    const flatpickrDates = flatpickr (datePicker, options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

  let countDown = 0; 

  const startTimer = () =>  {
    startBtn.disabled = true;
        
        myTimer = setInterval (() => {
            countDown = convertMs(flatpickrDates.selectedDates[0].getTime() - new Date().getTime());

            if(new Date().getTime() > flatpickrDates.selectedDates[0].getTime()) {
                return;
            } else {
                dayPicker.textContent = countDown.days;
                hoursPicker.textContent = countDown.hours;
                minutesPicker.textContent = countDown.minutes;
                secondsPicker.textContent = countDown.seconds;
            }
        }, 1000);

  }


  startBtn.addEventListener('click', startTimer);

  const timerToChange = document.querySelector('.timer');

  timerToChange.style.display = 'flex';
  timerToChange.style.justifyContect = 'center'; 

  const fieldToChange = document.querySelectorAll('.field');

  function marginRight (){
    fieldToChange.forEach ( element => {
        element.style.marginRight = '40px';
    });
  }

  marginRight();