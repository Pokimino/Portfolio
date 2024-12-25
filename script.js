// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Fade-in effect for sections when scrolling
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1 // Trigger animation when 10% of the element is visible
});

// Observe sections with the class 'section'
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Dynamic year update in the footer
const yearElement = document.getElementById('current-year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Form validation
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="_replyto"]');
        const message = form.querySelector('textarea[name="message"]');

        if (!name.value || !email.value || !message.value) {
            e.preventDefault();
            alert('Please fill in all fields before submitting the form.');
        } else {
            alert('Thank you! Your message has been sent successfully.');
        }
    });
}
