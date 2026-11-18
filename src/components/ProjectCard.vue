<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowUpRight } from 'lucide-vue-next'
import type { Project } from '../data/types'
import { asset } from '../utils/asset'
import { useLocale } from '../composables/locale'
defineProps<{ project: Project; index?: number }>()
const { t } = useLocale()
</script>
<template>
  <RouterLink :to="`/projects/${project.slug}`" class="project-card" data-reveal>
    <div class="project-art" :class="`project-art--${project.category}`">
      <img v-if="project.image" :src="asset(project.image)" :alt="project.imageAlt ? t(project.imageAlt) : t(project.title)" loading="lazy" decoding="async" />
      <div v-else class="system-art" aria-hidden="true"><div class="system-art-grid"></div><span class="system-art-ring"></span><span class="system-art-core">{{ project.category === 'robotics' ? '◎' : project.category === 'vision' ? '◉' : '⌘' }}</span><span class="system-art-label">{{ project.category.toUpperCase() }} / SA.</span></div>
      <span class="project-art-number">{{ String((index ?? 0) + 1).padStart(2, '0') }}</span>
    </div>
    <div class="project-card-body"><div class="project-card-top"><span class="project-category">{{ project.category.toUpperCase() }}</span><ArrowUpRight :size="20" /></div><h3>{{ t(project.title) }}</h3><p>{{ t(project.subtitle) }}</p><div class="tag-list"><span v-for="tag in project.tags.slice(0, 3)" :key="tag">{{ tag }}</span></div></div>
  </RouterLink>
</template>
