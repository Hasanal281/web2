const wraper = document.querySelector('.wraper');
const loginlink = document.querySelector('.login-register');
const registerlink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.biasa')
const close = document.querySelector('.icon-close');

loginlink.addEventListener('click',() => {
 wraper.classList.add('active');
});

registerlink.addEventListener('click',() =>{
    wraper.classList.remove('active');
});

btnPopup.addEventListener('click',()=>{
  wraper.classList.add('active-popup');
});

close.addEventListener('click',()=>{
    wraper.classList.remove('active-popup');
});

