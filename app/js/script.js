const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body')
const header = document.querySelector(".header");
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');





btnHamburger.addEventListener('click', function () {
    console.log("open burger");
    if (header.classList.contains('open')) { //close menu
        body.classList.remove('noscroll');
        header.classList.remove('open');

        fadeElems.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');

        });


    }
    else {
        header.classList.add("open"); //open menu
        body.classList.add('noscroll');
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');

        });


    }
});