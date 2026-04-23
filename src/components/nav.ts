export function initNav() {
  const root = document.getElementById('nav-root')
  if (!root) return

  root.innerHTML = `
    <nav class="site-nav" id="site-nav">
      <div class="container nav-inner">
        <a href="/" class="nav-logo">
          <img src="/logo.jpg" alt="Silverdale Medical" />
        </a>
        <div class="nav-links">
          <a href="/index.html">Home</a>
          <a href="/about.html">About</a>
          <a href="/specialists.html">Specialists</a>
          <a href="/fees.html">Fees</a>
          <a href="/news.html">Latest News</a>
          <a href="/health-alerts.html">Health Alerts</a>
          <a href="/careers.html">Careers</a>
          <a href="/patient-resources.html">Patient Resources</a>
        </div>
        <div class="nav-actions">
          <a href="tel:094279997" class="nav-phone">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            09 427 9997
          </a>
          <a href="#book" class="nav-cta">Book Appointment</a>
        </div>
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div class="nav-overlay" id="nav-overlay"></div>
    <div class="nav-drawer" id="nav-drawer">
      <a href="/index.html">Home</a>
      <a href="/about.html">About</a>
      <a href="/specialists.html">Specialists</a>
      <a href="/fees.html">Fees</a>
      <a href="/news.html">Latest News</a>
      <a href="/health-alerts.html">Health Alerts</a>
      <a href="/careers.html">Careers</a>
      <a href="/patient-resources.html">Patient Resources</a>
      <a href="#book" class="nav-drawer-cta">Book Appointment</a>
    </div>
  `

  // Scroll shadow
  const nav = document.getElementById('site-nav')!
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10)
  }, { passive: true })

  // Mobile menu
  const hamburger = document.getElementById('nav-hamburger')!
  const drawer = document.getElementById('nav-drawer')!
  const overlay = document.getElementById('nav-overlay')!

  function openMenu() {
    hamburger.classList.add('open')
    drawer.classList.add('open')
    overlay.classList.add('open')
    document.body.style.overflow = 'hidden'
  }
  function closeMenu() {
    hamburger.classList.remove('open')
    drawer.classList.remove('open')
    overlay.classList.remove('open')
    document.body.style.overflow = ''
  }

  hamburger.addEventListener('click', () => {
    hamburger.classList.contains('open') ? closeMenu() : openMenu()
  })
  overlay.addEventListener('click', closeMenu)

  // Active link
  const path = window.location.pathname
  root.querySelectorAll('a').forEach(a => {
    const href = a.getAttribute('href') ?? ''
    if (
      href === path ||
      (path === '/' && href === '/index.html') ||
      (path.endsWith('index.html') && href === '/index.html')
    ) {
      a.classList.add('active')
    }
  })
}
