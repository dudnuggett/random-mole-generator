// script.js
document.getElementById('generateButton').addEventListener('click', function() {
    const mole = document.getElementById('mole');
    const faceImage = document.getElementById('faceImage');
    
    // Get the bounding rectangle of the face image
    const faceRect = faceImage.getBoundingClientRect();
    
    // Calculate a random position for the mole
    const x = Math.random() * (faceRect.width - 10); // Subtract mole width to stay inside
    const y = Math.random() * (faceRect.height - 10); // Subtract mole height to stay inside
    
    // Set the position of the mole
    mole.style.left = `${x}px`;
    mole.style.top = `${y}px`;
    mole.style.display = 'block'; // Show the mole
});
