<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
const props = defineProps<{ source: string }>()
const host = ref<HTMLElement | null>(null)
const error = ref(false)
let observer: IntersectionObserver | undefined
onMounted(() => {
  if (!host.value) return
  observer = new IntersectionObserver(async entries => {
    if (!entries[0]?.isIntersecting) return
    observer?.disconnect()
    try {
      const mermaid = (await import('mermaid')).default
      mermaid.initialize({ startOnLoad: false, theme: 'base', themeVariables: { primaryColor: '#e9f5ff', primaryTextColor: '#103b70', primaryBorderColor: '#87c6ed', lineColor: '#2b94d5', fontFamily: 'Inter, sans-serif' }, securityLevel: 'strict' })
      const id = `diagram-${Math.random().toString(36).slice(2)}`
      const { svg } = await mermaid.render(id, props.source)
      if (host.value) host.value.innerHTML = svg
    } catch { error.value = true }
  }, { rootMargin: '200px' })
  observer.observe(host.value)
})
onUnmounted(() => observer?.disconnect())
</script>
<template><div ref="host" class="diagram-host" role="img" aria-label="Project architecture diagram"><span v-if="!error" class="muted">Loading diagram…</span><span v-else class="muted">Diagram unavailable</span></div></template>
