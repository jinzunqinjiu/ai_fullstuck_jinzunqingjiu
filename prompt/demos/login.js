window.addEventListener('scroll', function() {
    var nav = document.querySelector('header');
    if (window.pageYOffset > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
