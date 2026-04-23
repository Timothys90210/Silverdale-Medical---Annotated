import { initNav } from '../components/nav.ts'
import { initFooter } from '../components/footer.ts'

initNav()
initFooter()

// Category filter pills
const pills = document.querySelectorAll<HTMLElement>('.filter-pill[data-cat]')
const cards = document.querySelectorAll<HTMLElement>('.specialist-card[data-cat]')

pills.forEach(pill => {
  pill.addEventListener('click', () => {
    pills.forEach(p => p.classList.remove('active'))
    pill.classList.add('active')
    const cat = pill.dataset.cat ?? 'all'
    cards.forEach(card => {
      card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none'
    })
  })
})

const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
  { threshold: 0.05, rootMargin: '0px 0px 60px 0px' }
)
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
