document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Splide Slider
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        interval: 2000,
    }).mount();
});
// Product-splide
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#Product-splide', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        interval: 2000,
    }).mount();
});
// Testimonials_splide Slider
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#Testimonials_splide', {
        type: 'loop',
        perPage: 3, // Default for larger screens
        autoplay: true,
        interval: 2000, // Delay between slides (in milliseconds, e.g., 5000ms = 5 seconds)
        breakpoints: {
            600: { // Mobile view (you can adjust this value as needed)
                perPage: 1, // Show 1 item on mobile
            },
        },
    }).mount();
});
document.querySelectorAll('.quick-view').forEach(button => {
    button.addEventListener('click', function () {
      const product = this.getAttribute('data-product');
      document.querySelector('#services').value = product;
    });
  });
  
  const complaintBtn = document.getElementById('complaintBtn');
  const enquiryForm = document.getElementById('enquiryForm');

  complaintBtn.addEventListener('click', () => {
    enquiryForm.style.display = enquiryForm.style.display === 'block' ? 'none' : 'block';
  });

  // Close form when clicking outside
  window.addEventListener('click', (event) => {
    if (event.target !== complaintBtn && !enquiryForm.contains(event.target)) {
      enquiryForm.style.display = 'none';
    }
  });