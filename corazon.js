document.addEventListener('DOMContentLoaded', function () {
    const heartContainer = document.getElementById('heartContainer');
    const heartCount = 50; // Number of larger hearts

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.animationDelay = `${Math.random() * 2}s`;
        heartContainer.appendChild(heart);
    }

    // Arrange hearts in a larger heart shape
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart, i) => {
        const angle = (i / heartCount) * Math.PI * 2;
        const x = 250 + 180 * Math.pow(Math.sin(angle), 3);
        const y = 250 - 150 * (Math.cos(angle) - Math.pow(Math.cos(angle), 4));
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
    });
});

