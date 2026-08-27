let bg = document.querySelector('.bg');
let headerMenu = document.querySelector('.headerMenu');
let close = document.querySelector('.close');
let btnMenu = document.querySelector('.btnMenu');
close.addEventListener('click', function () {
    headerMenu.style.display = 'none';
    bg.style.backdropFilter = 'blur(0px)';
    bg.style.display = 'none';
    document.body.style.overflow = 'scroll';
});

btnMenu.addEventListener('click', function () {
    console.log(1)
    headerMenu.style.display = 'flex';
    bg.style.backdropFilter = 'blur(3px)';
    bg.style.display = 'block';
    document.body.style.overflow = 'hidden';
})