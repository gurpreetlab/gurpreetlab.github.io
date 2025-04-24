document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
        if (menuBtn.querySelector('i').classList.contains('ri-menu-line')) {
            menuBtn.querySelector('i').classList.remove('ri-menu-line');
            menuBtn.querySelector('i').classList.add('ri-close-line');
        } else {
            menuBtn.querySelector('i').classList.remove('ri-close-line');
            menuBtn.querySelector('i').classList.add('ri-menu-line');
        }
    });
    // Close mobile menu when clicking on a nav link
    const mobileNavLinks = mobileMenu.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.add('hidden');
            menuBtn.querySelector('i').classList.remove('ri-close-line');
            menuBtn.querySelector('i').classList.add('ri-menu-line');
        });
    });
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress-bar-fill');
    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            if (barPosition < screenPosition) {
                const width = bar.parentElement.nextElementSibling.querySelector('span').textContent;
                bar.style.width = width;
            }
        });
    };
    window.addEventListener('scroll', animateProgressBars);
    animateProgressBars(); // Initial check
    // Project filtering
    const filterBtns = document.querySelectorAll('.project-filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active class from all buttons
            filterBtns.forEach(btn => {
                btn.classList.remove('active', 'bg-primary', 'text-white');
                btn.classList.add('hover:bg-white', 'hover:bg-opacity-10');
            });
            // Add active class to clicked button
            this.classList.add('active', 'bg-primary', 'text-white');
            this.classList.remove('hover:bg-white', 'hover:bg-opacity-10');
            const filter = this.getAttribute('data-filter');
            projectItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    // Form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, subject, message });
        // Reset form
        contactForm.reset();
        // Show success message (in a real implementation)
        alert('Thank you for your message! I will get back to you soon.');
    });
});
// Create floating shapes
document.addEventListener('DOMContentLoaded', function () {
    // Floating orb animation
    const floatingOrb = document.getElementById('floatingOrb');
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    function updateOrbPosition() {
        const dx = mouseX - currentX;
        const dy = mouseY - currentY;
        currentX += dx * 0.1;
        currentY += dy * 0.1;
        floatingOrb.style.transform = `translate(${currentX - 150}px, ${currentY - 150}px)`;
        floatingOrb.style.setProperty('--primary-color', '#6366f1');
        requestAnimationFrame(updateOrbPosition);
    }
    updateOrbPosition();
    const floatingShapes = document.querySelector('.floating-shapes');
    for (let i = 0; i < 15; i++) {
        const size = Math.random() * 100 + 50;
        const shape = document.createElement('div');
        shape.classList.add('shape');
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.top = `${Math.random() * 100}%`;
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.animationDelay = `${Math.random() * 10}s`;
        floatingShapes.appendChild(shape);
    }
});