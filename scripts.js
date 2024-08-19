let currentSlide = 0;

function showSlide(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach((testimonial, i) => {
        testimonial.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

function nextSlide() {
    const testimonials = document.querySelectorAll('.testimonial');
    currentSlide = (currentSlide + 1) % testimonials.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);
