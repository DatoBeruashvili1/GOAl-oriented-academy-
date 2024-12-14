const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');


dayInput.addEventListener('input', () => {
  if (parseInt(dayInput.value) > 31) {
    alert('Day cannot be greater than 31!');
    dayInput.value = '';
  }
});

monthInput.addEventListener('input', () => {
  if (parseInt(monthInput.value) > 12) {
    alert('Month cannot be greater than 12!');
    monthInput.value = '';
  }
});

yearInput.addEventListener('input', () => {
  if (yearInput.value.length > 4) {
    alert('Year can only have 4 digits!');
    yearInput.value = yearInput.value.slice(0, 4);
  }
});