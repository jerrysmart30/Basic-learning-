// put our javascript in here

 const hamburgerbutton = document.querySelector('.hamburger');
 const hamburgerlist = document.querySelector('.hamburger-list-container');

 hamburgerbutton.addEventListener('click', () => {
  hamburgerlist.classList.toggle('hidden')
 });

 const MERCHbutton = document.querySelector('.MERCH');
 const MERCHlist = document.querySelector('.MERCH-LIST-CONTAINER');

 MERCHbutton.addEventListener ('click', () => {
  MERCHhlist.classList.toggle('hidden')
 });
 
 const myButton = document.querySelector('.button-2');

 myButton.addEventListener('click', function(e) {
  e.preventDefault()
  window.alert('THANKS FOR CLICKING')
  window.location.href = 'file:///C:/Users/orova/Documents/AFRICANTEEN_TV/pages/message.html'
 });

  // const myButton = document.querySelector('button')
  // const head = document.querySelector('#men')
  // myButton.onclick = triggerOnclickButton;
  // function triggerOnclickButton(){
  //   myButton.textContent = 'THANKS FOR ';
  // head.textContent = 'THANK YOU FOR THE REQUEST'; 
  // }
