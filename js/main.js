const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userlist = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
  e.preventDefault();

 if(nameInput.value === '' || emailInput.value === '') {
     msg.classList.add ('error');
    msg.innerHTML = 'please enter all field';

    if(nameInput.value ) {
      msg.classList.add ('error');
     msg.innerHTML = 'please enter all field';
    }

    setTimeout(() => msg.remove(), 3000);
 }else{
    const li = document.createElement ('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

    userlist.appendChild(li);

    //clear fields
    nameInput ='';
    emailInput ='';
 }
}