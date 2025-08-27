document.querySelectorAll('.photo-container img').forEach(img => {
  img.addEventListener('click', function() {
    // Create overlay div
    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.85)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '10000',
      cursor: 'zoom-out',
      padding: '10px',
      boxSizing: 'border-box',
    });

    // Remove overlay on click
    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });

    // Create enlarged image with responsive max sizes
    const largeImg = document.createElement('img');
    largeImg.src = img.src;
    Object.assign(largeImg.style, {
      maxWidth: '100%',    // full width inside padding constraints
      maxHeight: '100%',   // full height inside viewport
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.6)',
      objectFit: 'contain',
      cursor: 'zoom-out',
    });

    overlay.appendChild(largeImg);
    document.body.appendChild(overlay);
  });
});
