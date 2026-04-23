import { initNav } from '../components/nav.ts'
import { initFooter } from '../components/footer.ts'

initNav()
initFooter()

const filters = document.querySelectorAll<HTMLElement>('.news-filter[data-cat]')
const cards = document.querySelectorAll<HTMLElement>('[data-cat]')

filters.forEach(f => {
  f.addEventListener('click', () => {
    filters.forEach(x => x.classList.remove('active'))
    f.classList.add('active')
    const cat = f.dataset.cat ?? 'all'
    cards.forEach(c => {
      if (c.classList.contains('news-filter')) return
      c.style.display = (cat === 'all' || c.dataset.cat === cat) ? '' : 'none'
    })
  })
})

const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
  { threshold: 0.05, rootMargin: '0px 0px 60px 0px' }
)
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
