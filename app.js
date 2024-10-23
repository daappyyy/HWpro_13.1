const userName = document.querySelector('#name');
const userMessage = document.querySelector('.message');
const userPhone = document.querySelector('#phone');
const userEmail = document.querySelector('#email');
const sendBtn = document.querySelector('.send-message-btn')

const nameError = document.querySelector('.name-error');
const phoneError = document.querySelector('.phone-error');
const emailError = document.querySelector('.email-error');
const messageError = document.querySelector('.message-error');


sendBtn.addEventListener('click', function(event){
    event.preventDefault();

    if(userName.value === ''){
        nameError.classList.remove('hidden');
        userName.classList.add('invalid');
    }else{
        nameError.classList.add('hidden');
        userName.classList.remove('invalid');
    }

    phoneValid();
    emailValid()
    messageValid()

})


function phoneValid(){
    const phonePattern = /^(\+380)\d{9}$/;
    if(userPhone.value === ''){
        phoneError.innerText = 'Enter phone number!'
        phoneError.classList.remove('hidden');
        userPhone.classList.add('invalid');
    }else if(!userPhone.value.match(phonePattern)){
        phoneError.innerText = "Phone must contain +380 and 9 digits!";
        phoneError.classList.remove('hidden');
        userPhone.classList.add('invalid');
    }else{
    phoneError.classList.add('hidden');
    userPhone.classList.remove('invalid'); 
    }
   
}

function messageValid(){
    const messagePattern = /.{5,}/;
    if(!userMessage.value.match(messagePattern)){
        messageError.innerText = 'Message must contain at least 5 characters!'
        messageError.classList.remove('hidden');
        userMessage.classList.add('invalid');
    }else{
        messageError.classList.add('hidden');
        userMessage.classList.remove('invalid');
    }
   
}

function emailValid(){
    const emailPattern = /[a-z0-9_]+@[a-z]+\.com$/;
    if(userEmail.value === ''){
        emailError.innerText = 'Enter Email!'
        emailError.classList.remove('hidden');
        userEmail.classList.add('invalid');
    }else if(!userEmail.value.match(emailPattern)){
        emailError.innerText = 'Email must contain @ and .com'
        emailError.classList.remove('hidden');
        userEmail.classList.add('invalid');
    }else{
        emailError.classList.add('hidden');
        userEmail.classList.remove('invalid');
    }
    
}
