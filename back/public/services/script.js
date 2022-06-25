function validateForm() {
  let x = document.forms.reserve.imie;
  let y = document.forms.reserve.nazw;

  if (x.value.length == 0 || x.value.length > 40) {
    document.getElementsByClassName('input_error')[0].style.display = 'inline-block';
    x.classList.add('input_box_error');
  }
  else {
    document.getElementsByClassName('input_error')[0].style.display = 'none';
    x.classList.remove('input_box_error');
  }

  if (y.value.length == 0 || y.value.length > 40) {
    document.getElementsByClassName('input_error')[1].style.display = 'inline-block';
    y.classList.add('input_box_error');
  }
  else {
    document.getElementsByClassName('input_error')[1].style.display = 'none';
    y.classList.remove('input_box_error');
  }
}

document.forms.reserve.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm();
});

document.forms.reserve.addEventListener('focusin', (event) => {
  event.target.style.borderColor = 'blue';
});

document.forms.reserve.addEventListener('focusout', (event) => {
  event.target.style.borderColor = '';
});