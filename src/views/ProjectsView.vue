<script setup lang="ts">
import { computed, ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'
import type { ProjectCategory } from '../data/types'
import { useLocale } from '../composables/locale'
import { useReveal } from '../composables/reveal'
const { locale } = useLocale()
useReveal()
const selected = ref<'all' | ProjectCategory>('all')
const filtered = computed(() => selected.value === 'all' ? projects : projects.filter(project => project.category === selected.value))
const categories: Array<['all' | ProjectCategory, string, string]> = [['all', '全部', 'All'], ['robotics', '机器人', 'Robotics'], ['embedded', '嵌入式', 'Embedded'], ['vision', '计算机视觉', 'Vision'], ['software', '软件平台', 'Software']]
</script>
<template><div><section class="page-hero"><div class="shell"><p class="eyebrow">PROJECTS / 项目作品</p><h1>{{ locale === 'zh' ? '从原型到案例。' : 'From prototypes to case studies.' }}</h1><p>{{ locale === 'zh' ? '沿着竞赛、设备、视觉和软件实践，查看每个作品的过程与成果。' : 'Explore the process and outcomes behind competition, hardware, vision, and software work.' }}</p></div></section><div class="shell content-section"><div class="filter-row" role="group" :aria-label="locale === 'zh' ? '项目分类' : 'Project categories'"><button v-for="[key, zh, en] in categories" :key="key" class="filter-button" :class="{ active: selected === key }" :aria-pressed="selected === key" @click="selected = key">{{ locale === 'zh' ? zh : en }}</button></div><div class="project-grid"><ProjectCard v-for="(project, index) in filtered" :key="project.slug" :project="project" :index="index" /></div></div></div></template>
