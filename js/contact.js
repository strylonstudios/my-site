// contact.js - Booking form handling and interactivity

document.addEventListener('submit', (e) => {
  const form = e.target;
  if(form.tagName === 'FORM' && form.id === 'booking-form') {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    console.log('Booking Request Received:', data);
    alert('Thank you for your interest! We will contact you soon.');
    form.reset();
  }
});

console.log('Contact JS Initialized');
