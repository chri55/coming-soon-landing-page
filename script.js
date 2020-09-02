var errorToggled = false;

const toggleError = () => {
  document.querySelectorAll('.error-enabled').forEach(e => e.classList.toggle('error'));
  document.querySelector('.signup').classList.toggle('error');
}

const validateEmail = () => {
  //e.preventDefault();
  const currVal = document.querySelector('#form-input').value;
  // Email Validation Regular Expression
  // SRC: https://regexlib.com/REDetails.aspx?regexp_id=26
  const re = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  console.log(currVal);
  console.log(currVal.match(re));
  if (currVal.length === 0 || (!currVal.match(re) && !errorToggled)) {
    toggleError();
    errorToggled = true;
  }
}

const resetError = () => {
  if (errorToggled) toggleError();
  errorToggled = false;
}