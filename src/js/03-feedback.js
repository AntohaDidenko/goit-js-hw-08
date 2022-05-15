const throttle = require('lodash.throttle');
const form = document.querySelector('form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

dataFromLocalStorage();

const formData = localStorage.getItem(STORAGE_KEY)
  ? JSON.parse(localStorage.getItem(STORAGE_KEY))
  : {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();
  const parseData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;
  if (!email || !message) {
    return alert('Please complete all fields!');
  }
  console.log(parseData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function dataFromLocalStorage() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    return;
  }

  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (data) {
    data.email ? (email.value = data.email) : '';
    data.message ? (message.value = data.message) : '';
  }
}
