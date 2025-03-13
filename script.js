document.addEventListener("DOMContentLoaded", function () {
    // ✅ Scroll Animation Code (Keep this)
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach(section => {
        observer.observe(section);
    });

    // ✅ Manual Image Slider Code
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector("#prev");
    const nextButton = document.querySelector("#next");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Initialize first slide
    if (slides.length > 0) {
        showSlide(currentSlide);
    }

    // Add event listeners to buttons
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
});
