
// Hamburger menu

const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header__menu');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', function() {
    console.log('click hamburger');
    if(header.classList.contains('open')) { //close menu
        body.classList.remove('noscroll');
        header.classList.remove('open');

        fadeElems.forEach(function(element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
            
        })
    
    } else { // open menu and no scroling down
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
            
        })
       
        

    }
    
});
