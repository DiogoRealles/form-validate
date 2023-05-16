const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  inspect();
});

function inspect(){
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;

  if(usernameValue == ''){
    setErrorFor(username, "Username can't be blank");
  } else {
    setSuccessFor(username);
  }

  if(emailValue == ''){
    setErrorFor(email, "Email can't be blank");
  } else if(!emailVerification(emailValue)){
    setErrorFor(email, "Email is invalid");
  } else {
    setSuccessFor(email);
  }

  if(passwordValue == ''){
    setErrorFor(password, "Password can't be blank");
  } else if(passwordValue.length <= 7){
    setErrorFor(password, "Password must be atleast 8 characters");
  } else {
    setSuccessFor(password);
  }

  if(confirmPasswordValue == ''){
    setErrorFor(confirmPassword, "Confirm password can't be blank");
  } else if(passwordValue != confirmPasswordValue){
    setErrorFor(confirmPassword, "Password should be the same");
  } else {
    setSuccessFor(confirmPassword);
  }

  if(usernameValue === '' || emailValue === '' || passwordValue === '' || confirmPassword === '' || passwordValue != confirmPasswordValue || passwordValue.length <= 7 || (!emailVerification(emailValue))){
    isvalid = false;
  } else {
    isvalid = true;
  }

  if(isvalid){
    alert('Account creation is sucessfull');
    username.value = '';
    email.value = '';
    password.value = '';
    confirmPassword.value = '';
    setSuccessFor('');
  }
};

function setErrorFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;

  formControl.className = 'form-control error';
}

function setSuccessFor(input, message){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function emailVerification(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}