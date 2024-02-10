
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#myInput');
togglePassword. addEventListener('click', function (e) {

          
const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
password.setAttribute('type', type);
if (togglePassword.src.match("images/eye.png")) {
    togglePassword.src ="images/eye-slash.png";
} else {
    togglePassword.src ="images/eye.png";
    }
      }); 
