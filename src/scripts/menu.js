document.querySelector('.hamburger').addEventListener('click', ()=> {
    document.querySelector('.nav-links').classList.toggle('expanded');
})

document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('expanded');
    });
});

document.addEventListener('click', (event) => {
    const navLinks = document.querySelector('.nav-links');
    const isClickInside = navLinks.contains(event.target) || document.querySelector('.hamburger').contains(event.target);

    if (!isClickInside) {
        navLinks.classList.remove('expanded');
    }
});
