const maxNumberCount = 100;
let numberCount = 0;
let intervalId;

document.getElementById('press-me-button').addEventListener('click', function() {
    console.log('Button pressed');
    document.getElementById('congrats-message').style.display = 'block';
    document.getElementById('matrix-sound').play();
    
    intervalId = setInterval(() => {
        if (numberCount < maxNumberCount) {
            createNumber();
        }
    }, 100); // Create a new number every 100ms
});

document.getElementById('reset-button').addEventListener('click', function() {
    console.log('Reset button pressed');
    document.getElementById('congrats-message').style.display = 'none';
    const matrixContainer = document.getElementById('matrix-container');
    while (matrixContainer.firstChild) {
        matrixContainer.removeChild(matrixContainer.firstChild);
    }
    numberCount = 0;
    clearInterval(intervalId);
});

function createNumber() {
    console.log('Creating number');

    const number = document.createElement('div');
    number.classList.add('number');

    number.textContent = Math.floor(Math.random() * 10);

    number.style.left = Math.random() * 100 + 'vw';
    number.style.top = -Math.random() * 20 + 'vh';
    document.getElementById('matrix-container').appendChild(number);

    console.log('Number added to container');

    // Trigger the transition by forcing reflow and setting opacity to 1
    requestAnimationFrame(() => {
        number.style.opacity = 1;
    });

    numberCount++;

    setTimeout(() => {
        number.style.opacity = 0;
        setTimeout(() => {
            number.remove();
            numberCount--;
            console.log('Number removed');
        }, 500); // Wait for the fade-out transition to complete
    }, 5000); // Duration for the numbers to fall the full length
}