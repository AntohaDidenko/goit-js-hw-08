const throttle = require('lodash.throttle');
const form = document.querySelector('form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

dataFromLocalStorage();

const formData = {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onSubmitForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
}
