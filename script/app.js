const { default: FormCheckInput } = require("react-bootstrap/esm/FormCheckInput");

const form = document.getElementById ('form');
const email = document.getElementById ('InputEmail');
const password = document.getElementById ('InputPassword');
// const form = document.getElementById ('form');

form.addEventListener('submit',(e)=> {
    e.preventDefault();

    checkInput();


});

function checkInput(){
    const emailValue= email.value.trim();
    const passwordValue= password.value.trim();

    if (emailValue===''){
        message.innerHTML = 'email cant be blank';
    }else{
        message.innerHTML="form submitted"
    }
}

function setErrorFor(input,message){
    const formControl= input.parentElement;

    message.innerHTML=message
    
    formControl.className ='form-control error'
}

