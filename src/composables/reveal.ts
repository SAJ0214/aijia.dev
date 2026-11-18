import { onMounted, onUnmounted } from 'vue'

export function useReveal() {
  let observer: IntersectionObserver | undefined
  onMounted(async () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const { gsap } = await import('gsap')
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        gsap.fromTo(entry.target, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out', clearProps: 'all' })
        observer?.unobserve(entry.target)
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('[data-reveal]').forEach(element => observer?.observe(element))
  })
  onUnmounted(() => observer?.disconnect())
}
