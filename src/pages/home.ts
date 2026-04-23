import { initNav } from '../components/nav.ts'
import { initFooter } from '../components/footer.ts'

initNav()
initFooter()

// Scroll animations — rootMargin ensures elements near the viewport edge trigger too
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
  { threshold: 0.05, rootMargin: '0px 0px 60px 0px' }
)
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
