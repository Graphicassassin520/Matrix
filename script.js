const maxNumberCount = 100;
let numberCount = 0;
let intervalId;

document.getElementById('red-pill-button').addEventListener('click', function() {
    console.log('Red pill button pressed');
    document.getElementById('congrats-message').textContent = 'Wrong choice Dumb Fuck. Try again you Fuckin Retard.';
    const wrongChoiceSound = document.getElementById('wrong-choice-sound');
    if (wrongChoiceSound) {
        wrongChoiceSound.play().catch((error) => {
            console.error('Error playing wrong choice sound:', error);
        });
    } else {
        console.error('Wrong choice sound element not found');
    }
});

document.getElementById('blue-pill-button').addEventListener('click', function() {
    console.log('Blue pill button pressed');
    document.getElementById('congrats-message').textContent = 'Congratulations Palumbo! You are now out of the Matrix!';
    const matrixSound = document.getElementById('matrix-sound');
    if (matrixSound) {
        matrixSound.play().catch((error) => {
            console.error('Error playing matrix sound:', error);
        });
    } else {
        console.error('Matrix sound element not found');
    }
    startMatrixEffect();
});

document.getElementById('reset-button').addEventListener('click', function() {
    console.log('Reset button pressed');
    document.getElementById('congrats-message').textContent = 'Choose your fate';
    const matrixContainer = document.getElementById('matrix-container');
    while (matrixContainer.firstChild) {
        matrixContainer.removeChild(matrixContainer.firstChild);
    }
    numberCount = 0;
    clearInterval(intervalId);
});

function startMatrixEffect() {
    intervalId = setInterval(() => {
        if (numberCount < maxNumberCount) {
            createNumber();
        }
    }, 100); // Create a new number every 100ms
}

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