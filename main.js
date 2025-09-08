// Add interactive functionality
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    const featureCards = document.querySelectorAll('.feature-card');
    const navLinks = document.querySelectorAll('.nav-links a');

    // CTA Button interaction
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            ctaButton.style.transform = 'scale(0.95)';
            setTimeout(() => {
                ctaButton.style.transform = 'scale(1)';
            }, 150);
            
            // Add a fun effect
            const originalText = ctaButton.textContent;
            ctaButton.textContent = 'Loading...';
            setTimeout(() => {
                ctaButton.textContent = originalText;
            }, 1000);
        });
    }

    // Feature cards hover effects
    featureCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            card.style.transform = 'translateY(-8px) scale(1.02)';
            card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click effect
        card.addEventListener('click', function() {
            card.style.transform = 'translateY(-8px) scale(0.98)';
            setTimeout(() => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
            }, 150);
        });
    });

    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Smooth scroll effect (simulated)
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // Add parallax effect to floating card
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.floating-card');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });

    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});