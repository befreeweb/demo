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
          <p class="hero-subtitle">Creating stunning digital experiences with modern design principles</p>
          <button class="cta-button">Get Started</button>
        </div>
        <div class="hero-image">
          <div class="floating-card">
            <div class="card-content">
              <div class="card-icon">✨</div>
              <h3>Premium Quality</h3>
              <p>Crafted with attention to detail</p>
            </div>
          </div>
        </div>
      </section>

      <section class="features">
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>Modern Design</h3>
            <p>Clean, contemporary aesthetics that engage users</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Fast Performance</h3>
            <p>Optimized for speed and smooth interactions</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>Responsive</h3>
            <p>Perfect experience across all devices</p>
          </div>
        </div>
      </section>
    </main>
  </div>
`

// Add interactive functionality
const ctaButton = document.querySelector('.cta-button')
const featureCards = document.querySelectorAll('.feature-card')

ctaButton.addEventListener('click', () => {
  ctaButton.style.transform = 'scale(0.95)'
  setTimeout(() => {
    ctaButton.style.transform = 'scale(1)'
  }, 150)
})

featureCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px)'
  })
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)'
  })
})