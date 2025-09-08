import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header class="header">
      <nav class="nav">
        <div class="logo">
          <h1>ModernWeb</h1>
        </div>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main class="main">
      <section class="hero">
        <div class="hero-content">
          <h2 class="hero-title">Beautiful Web Design</h2>
          <p class="hero-subtitle">Creating stunning digital experiences with modern design principles and cutting-edge technology</p>
          <button class="cta-button">Get Started Today</button>
        </div>
        <div class="hero-image">
          <div class="floating-card">
            <div class="card-content">
              <div class="card-icon">✨</div>
              <h3>Premium Quality</h3>
              <p>Crafted with attention to detail and modern design principles</p>
            </div>
          </div>
        </div>
      </section>

      <section class="features">
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>Modern Design</h3>
            <p>Clean, contemporary aesthetics with beautiful gradients and smooth animations that engage users</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Fast Performance</h3>
            <p>Optimized for speed with smooth interactions and lightning-fast loading times</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>Fully Responsive</h3>
            <p>Perfect experience across all devices - desktop, tablet, and mobile</p>
          </div>
        </div>
      </section>
    </main>
  </div>
`

// Add interactive functionality
const ctaButton = document.querySelector('.cta-button')
const featureCards = document.querySelectorAll('.feature-card')

// CTA Button interaction
ctaButton.addEventListener('click', () => {
  ctaButton.style.transform = 'scale(0.95)'
  setTimeout(() => {
    ctaButton.style.transform = 'scale(1)'
  }, 150)
  
  // Add a fun effect
  ctaButton.textContent = 'Loading...'
  setTimeout(() => {
    ctaButton.textContent = 'Get Started Today'
  }, 1000)
})

// Feature cards hover effects
featureCards.forEach((card, index) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px) scale(1.02)'
    card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  })
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)'
  })
  
  // Add click effect
  card.addEventListener('click', () => {
    card.style.transform = 'translateY(-8px) scale(0.98)'
    setTimeout(() => {
      card.style.transform = 'translateY(-8px) scale(1.02)'
    }, 150)
  })
})

// Add smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const href = link.getAttribute('href')
    
    // Add active state
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'))
    link.classList.add('active')
    
    // Smooth scroll effect (simulated)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
})

// Add parallax effect to floating card
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset
  const parallax = document.querySelector('.floating-card')
  if (parallax) {
    const speed = scrolled * 0.5
    parallax.style.transform = `translateY(${speed}px)`
  }
})

// Add loading animation
window.addEventListener('load', () => {
  document.body.style.opacity = '0'
  document.body.style.transition = 'opacity 0.5s ease-in-out'
  
  setTimeout(() => {
    document.body.style.opacity = '1'
  }, 100)
})