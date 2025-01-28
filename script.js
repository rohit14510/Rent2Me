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
