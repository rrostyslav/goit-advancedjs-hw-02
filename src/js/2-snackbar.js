import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const createPromise = (delay, state) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      state === 'fulfilled' ? resolve() : reject();
    }, delay);
  });

const form = document.querySelector('.promise-form');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const delay = parseInt(form.elements.delay.value);
  const state = form.elements.state.value;

  try {
    await createPromise(delay, state);
    iziToast.success({
      title: 'Success',
      message: `✅ Fulfilled promise in ${delay}ms`,
      position: 'topRight',
    });
  } catch {
    iziToast.error({
      title: 'Error',
      message: `❌ Rejected promise in ${delay}ms`,
      position: 'topRight',
    });
  }

  form.reset();
});
