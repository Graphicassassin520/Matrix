const maxNumberCount = 100;
let numberCount = 0;
let intervalId;

document.getElementById('red-pill-button').addEventListener('click', function() {
    console.log('Red pill button pressed');
    document.getElementById('congrats-message').textContent = 'Wrong choice. Try again.';
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
        console.error('Matrix sound element not