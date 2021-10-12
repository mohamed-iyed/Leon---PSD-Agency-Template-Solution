const logo = document.getElementsByClassName('bar-logo')[0];
const bars = Array.from(document.getElementsByClassName('bar'));
const menu = document.getElementsByClassName('nav-links')[0];

document.addEventListener('click', (event) => {
    if(menu.style.right == '50px'){
        menu.style.right = '0';
        menu.style.top = '0';
        menu.style.transform = 'translate(60px, -70px) scale(0)'; 
    }else if(bars.some(elem => elem == event.target) || event.target == logo){
        menu.style.right = '50px';
        menu.style.top = '100%';
        menu.style.transform = 'translate(0, 0) scale(1)';
    }
});