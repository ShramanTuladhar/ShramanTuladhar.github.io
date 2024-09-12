// Smooth fade-in for sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        // Adjust the value for when the section should start to fade in
        const offset = 100; // Change this value to control when the fade-in starts

        if (position < windowHeight - offset) {
            section.classList.add('fade-in');
        } else {
            section.classList.remove('fade-in');
        }
    });
});
const draggable = document.querySelector('.draggable');

draggable.addEventListener('mousedown', (e) => {
    const offsetX = e.clientX - draggable.getBoundingClientRect().left;
    const offsetY = e.clientY - draggable.getBoundingClientRect().top;

    function onMouseMove(e) {
        draggable.style.left = `${e.clientX - offsetX}px`;
        draggable.style.top = `${e.clientY - offsetY}px`;
    }

    document.addEventListener('mousemove', onMouseMove);

    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove);
    }, { once: true });
});
