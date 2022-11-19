const tag = document.querySelector('.tag');
const vert = document.querySelector('.vert');
const hor = document.querySelector('.hor');


window.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    tag.innerText = `X:${x} / Y:${y}`;
    tag.style.transform = `translate(${x}px, ${y}px)`;
    vert.style.transform = `translateX(${x}px)`;
    hor.style.transform = `translateY(${y}px)`;
})