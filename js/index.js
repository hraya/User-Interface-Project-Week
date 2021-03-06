//Hamburger Menu functionality
const toggleMenu = () => {
    //Toggle the 'menu-open' class
    menuButton.style.display = 'none';
    closeButton.style.display = 'block'
    menu.classList.add('menu-open');
    headerTag.style.opacity = '0.9';
};
//reference to the '.menu' class
const menu = document.querySelector('.menu');

//Reference to headertag
const headerTag = document.querySelector('header');

//reference to the '.menu-img' class for menu button
const menuButton = document.querySelector('.menu-btn');

//event listner for when menu button is clicked
menuButton.addEventListener('click', toggleMenu);

//Close button reference and listener
const closeButton = document.querySelector('.close-btn')
closeButton.addEventListener('click', () => {
    menuButton.style.display = 'flex';
    closeButton.style.display = 'none';
    menu.classList.remove('menu-open');
    headerTag.style.opacity = '1';
});