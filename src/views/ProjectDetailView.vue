<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { ArrowLeft, ArrowUpRight } from 'lucide-vue-next'
import MermaidDiagram from '../components/MermaidDiagram.vue'
import { getProject } from '../data/projects'
import { useLocale } from '../composables/locale'
import { asset } from '../utils/asset'

const route = useRoute()
const { locale, t } = useLocale()
const project = computed(() => getProject(String(route.params.slug)))
watchEffect(() => { if (project.value) document.title = `${t(project.value.title)} · 宋爱家` })
</script>

<template>
  <div v-if="project">
    <section class="page-hero"><div class="shell detail-hero"><div><RouterLink to="/projects" class="back-link"><ArrowLeft :size="15" /> {{ locale === 'zh' ? '返回项目' : 'Back to projects' }}</RouterLink><p class="eyebrow">PROJECT / {{ project.category.toUpperCase() }}</p><h1>{{ t(project.title) }}</h1><p>{{ t(project.subtitle) }}</p><div class="tag-list"><span v-for="tag in project.tags" :key="tag">{{ tag }}</span></div></div><img v-if="project.image" class="detail-cover" :class="{ 'detail-cover--contain': project.slug === 'english-platform' }" :src="asset(project.image)" :alt="project.imageAlt ? t(project.imageAlt) : t(project.title)"><div v-else class="detail-placeholder system-art" aria-hidden="true"><div class="system-art-grid"></div><span class="system-art-ring"></span><span class="system-art-core">◎</span><span class="system-art-label">{{ project.category.toUpperCase() }} / SA.</span></div></div></section>
    <div class="shell">
      <section v-if="project.before && project.built && project.after" class="detail-section"><p class="eyebrow">THE STORY</p><h2>Before / Built / After</h2><div class="narrative-grid"><div v-for="[label, value] in [['BEFORE', project.before], ['BUILT', project.built], ['AFTER', project.after]] as const" :key="label" class="glass-card narrative-card"><span>{{ label }}</span><p>{{ t(value) }}</p></div></div></section>
      <section v-if="project.process?.length || project.challenges?.length" class="detail-section detail-columns"><div v-if="project.process?.length"><p class="eyebrow">PROCESS</p><h2>{{ locale === 'zh' ? '开发过程' : 'Development process' }}</h2><div class="prose"><ol><li v-for="(step, index) in project.process" :key="index">{{ t(step) }}</li></ol></div></div><div v-if="project.challenges?.length"><p class="eyebrow">CHALLENGES</p><h2>{{ locale === 'zh' ? '核心难点' : 'Core challenges' }}</h2><div class="prose"><ul><li v-for="(item, index) in project.challenges" :key="index">{{ t(item) }}</li></ul></div></div></section>
      <section v-if="project.diagram" class="detail-section"><p class="eyebrow">ARCHITECTURE</p><h2>{{ locale === 'zh' ? '技术流程图' : 'Technical flow' }}</h2><div class="glass-card"><MermaidDiagram :source="project.diagram" /></div><p class="muted" style="font-size:11px;margin-top:12px">{{ locale === 'zh' ? '依据项目材料整理的概念流程。' : 'Conceptual flow based on the project records.' }}</p></section>
      <section v-if="project.contribution || project.outcome" class="detail-section detail-columns"><div v-if="project.contribution"><p class="eyebrow">MY ROLE</p><h2>{{ locale === 'zh' ? '个人贡献' : 'My contribution' }}</h2><p class="prose">{{ t(project.contribution) }}</p></div><div v-if="project.outcome"><p class="eyebrow">OUTCOME</p><h2>{{ locale === 'zh' ? '成果与验证' : 'Outcome' }}</h2><p class="prose">{{ t(project.outcome) }}</p></div></section>
      <section v-if="project.gallery?.length || project.video || project.repo" class="detail-section"><p class="eyebrow">MEDIA & SOURCE</p><h2>{{ locale === 'zh' ? '项目记录' : 'Project records' }}</h2><div v-if="project.gallery?.length" class="detail-media"><a v-for="image in project.gallery" :key="image" :href="asset(image)" target="_blank" rel="noopener noreferrer"><img :src="asset(image)" :alt="t(project.title)" loading="lazy" decoding="async"></a></div><video v-if="project.video" :src="asset(project.video)" controls preload="none"></video><a v-if="project.repo" :href="project.repo" class="text-link" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight :size="16" /></a></section>
      <div style="padding:42px 0 90px"><RouterLink to="/projects" class="button button-outline"><ArrowLeft :size="16" /> {{ locale === 'zh' ? '返回全部项目' : 'All projects' }}</RouterLink></div>
    </div>
  </div>
  <div v-else class="shell content-section"><h1>{{ locale === 'zh' ? '项目未找到' : 'Project not found' }}</h1><RouterLink to="/projects" class="text-link">{{ locale === 'zh' ? '返回项目列表' : 'Back to projects' }}</RouterLink></div>
</template>
