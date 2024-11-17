const circle = document.getElementById('circle');

function mover(event){
    const x = event.clientX;
    const y = event.clientY;
    circle.style.transform = `translate(${x - 100}px, ${y - 100}px)`;
}

document.addEventListener('mousemove', mover);

document.addEventListener('click', function(event){
    console.log('estas atrapado');
    document.removeEventListener('mousemove', mover);
});




