const maxConfettiCount = 100;
let confettiCount = 0;

document.getElementById('press-me-button').addEventListener('click', function() {
    document.getElementById('congrats-message').style.display = 'block';
    document.getElementById('confetti-sound').play();
    for (let i = 0; i < maxConfettiCount; i++) {
        createConfetti();
    }
});

document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('congrats-message').style.display = 'none';
    const confettiContainer = document.getElementById('confetti-container');
    while (confettiContainer.firstChild) {
        confettiContainer.removeChild(confettiContainer.firstChild);
    }
    confettiCount = 0;
});

function createConfetti() {
    if (confettiCount >= maxConfettiCount) return;

    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    const shapes = ['shape-circle', 'shape-rectangle', 'shape-triangle'];
    const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
    confetti.classList.add(shapeType);

    const size = Math.random() * 10 + 10;
    confetti.style.width = `${size}px`;
    confetti.style.height = shapeType === 'shape-triangle' ? `${size * 2}px` : `${size}px`;

    const fallSpeed = Math.random() < 0.5 ? 'confetti-fall' : 'confetti-fall-slow';
    confetti.style.animationName = fallSpeed;

    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.getElementById('confetti-container').appendChild(confetti);

    // Trigger the transition by forcing reflow and setting opacity to 1
    requestAnimationFrame(() => {
        confetti.style.opacity = 1;
    });

    confettiCount++;

    setTimeout(() => {
        confetti.style.opacity = 0;
        setTimeout(() => {
            confetti.remove();
            confettiCount--;
        }, 500); // Wait for the fade-out transition to complete
    }, 3000);
}
