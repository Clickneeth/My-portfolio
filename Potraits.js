// Optional: Simple lightbox (enlarge image on click)
document.querySelectorAll('.photo-container img').forEach(img => {
  img.addEventListener('click', function() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.85)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 999;
    overlay.addEventListener('click', () => overlay.remove());
    const largeImg = document.createElement('img');
    largeImg.src = img.src;
    largeImg.style.maxWidth = '90vw';
    largeImg.style.maxHeight = '90vh';
    largeImg.style.borderRadius = '10px';
    overlay.appendChild(largeImg);
    document.body.appendChild(overlay);
  });
});
