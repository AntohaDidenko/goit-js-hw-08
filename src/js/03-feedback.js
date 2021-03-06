import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onFormsubmit);

const getData = localStorage.getItem(STORAGE_KEY);
const parseData = JSON.parse(getData);

if (parseData) {
  form.email.value = parseData.email;
  form.message.value = parseData.message;
}

function onFormData() {
  const email = form.email.value;
  const message = form.message.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));
}

function onFormsubmit(evt) {
  evt.preventDefault();

  const email = evt.currentTarget.elements.email.value;
  const message = evt.currentTarget.elements.message.value;

  if (!email || !message) {
    return alert('Please complete all fields!');
  }

  const data = {
    email,
    message,
  };

  console.log(data);

  localStorage.removeItem(STORAGE_KEY);
  evt.currentTarget.reset();
}
