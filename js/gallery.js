// gallery.js - Fetch and render gallery images from gallery.json

async function loadGallery() {
  try {
    const response = await fetch('gallery.json');
    if (!response.ok) throw new Error('Could not fetch gallery data');
    const data = await response.json();
    console.log('Gallery data loaded:', data);
    // Future: Render gallery images to DOM
  } catch (err) {
    console.error('Gallery Error:', err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadGallery();
  console.log('Gallery JS Initialized');
});
