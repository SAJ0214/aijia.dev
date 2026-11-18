<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { posts } from '../data/blog'
import { useLocale } from '../composables/locale'
const { locale, t } = useLocale()
</script>
<template><div><section class="page-hero"><div class="shell"><p class="eyebrow">BLOG / 技术笔记</p><h1>{{ locale === 'zh' ? '把过程写下来。' : 'Notes from the process.' }}</h1><p>{{ locale === 'zh' ? '关于视觉、硬件和系统联调的实践笔记。' : 'Notes on vision, hardware, and integration.' }}</p></div></section><div class="shell content-section"><div class="blog-list"><RouterLink v-for="post in posts" :key="post.slug" :to="`/blog/${post.slug}`" class="glass-card blog-card"><p class="eyebrow">FIELD NOTE / {{ post.tags.join(' · ') }}</p><h2>{{ t(post.title) }}</h2><p>{{ t(post.summary) }}</p></RouterLink></div></div></div></template>
