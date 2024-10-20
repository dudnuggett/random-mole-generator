document.getElementById('generateButton').addEventListener('click', function() {
    const mole = document.getElementById('mole');
    const faceImage = document.getElementById('faceImage');

    // Define the original polygon coordinates (face area)
    const originalPolygonCoords = [
        [14, 87], [32, 34], [69, 8], [109, 2], [156, 11], [188, 44], [200, 86], 
        [201, 131], [193, 189], [177, 225], [148, 257], [108, 276], [65, 256], 
        [31, 220], [22, 187], [14, 132]
    ];

    // Get the current width and height of the image after scaling
    const faceRect = faceImage.getBoundingClientRect();
    const originalWidth = 213; // Original image width (adjust to your actual image dimensions)
    const originalHeight = 300; // Original image height (adjust to your actual image dimensions)

    // Scale the polygon coordinates based on the image's current size
    const scaledPolygonCoords = originalPolygonCoords.map(point => {
        const scaledX = (point[0] / originalWidth) * faceRect.width;
        const scaledY = (point[1] / originalHeight) * faceRect.height;
        return [scaledX, scaledY];
    });

    // Function to check if a point is inside the polygon (using the ray-casting algorithm)
    function isPointInPolygon(point, vs) {
        var x = point[0], y = point[1];
        var inside = false;
        for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
            var xi = vs[i][0], yi = vs[i][1];
            var xj = vs[j][0], yj = vs[j][1];
            var intersect = ((yi > y) != (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }
        return inside;
    }

    // Try to generate a random point inside the polygon
    let x, y;
    do {
        // Generate random coordinates within the image bounds
        x = Math.random() * faceRect.width;
        y = Math.random() * faceRect.height;
    } while (!isPointInPolygon([x, y], scaledPolygonCoords));

    // Set the mole's position relative to the image
    mole.style.left = `${x}px`;
    mole.style.top = `${y}px`;
    mole.style.display = 'block'; // Show the mole
});
