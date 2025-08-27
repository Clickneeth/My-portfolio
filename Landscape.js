// Enlarge image on click - lightbox style
document.querySelectorAll('.photo-container img').forEach(img => {
  img.addEventListener('click', function() {
    // Create overlay background
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0, 0, 0, 0.85)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 9999;

    // Clicking overlay removes it
    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });

    // Create enlarged image
    const largeImg = document.createElement('img');
    largeImg.src = img.src;
    largeImg.style.maxWidth = '90vw';
    largeImg.style.maxHeight = '90vh';
    largeImg.style.borderRadius = '10px';
    largeImg.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.5)';
    largeImg.style.cursor = 'zoom-out';

    overlay.appendChild(largeImg);
    document.body.appendChild(overlay);
  });
});
