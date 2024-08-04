/**
 * 
 */
 function showPhoto() {
    const name = document.getElementById('nameInput').value.toLowerCase();
    const photoContainer = document.getElementById('photoContainer');
    
    // Clear previous content
    photoContainer.innerHTML = '';

    // Example photos
    const photos = {
        'aarohi with matarani': 'arohi1.jpeg',
        'aarohi1': 'arohi2.jpeg',
        'aarohi with friend': 'arohi3.jpeg',
        'aarohi khidki me': 'arohi4.jpeg',
        'aarohi party me': 'arohi5.jpeg',
        'aarohi with mammy': 'arohi6.jpeg',
        'aarohi mandir me': 'arohi7.jpeg',
        'aarohi bagicha me': 'arohi8.jpeg',
        'aarohi nanighar me': 'arohi9.jpeg',
        'aarohi with papa': 'arohi10.jpeg'
        
    };

    if (photos[name]) {
        const img = document.createElement('img');
        img.src = photos[name];
        photoContainer.appendChild(img);
    } else {
        photoContainer.innerHTML = '<p>Photo not found</p>';
    }
}