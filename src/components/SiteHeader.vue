<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { Menu, X, ArrowUpRight } from 'lucide-vue-next'
import { useLocale } from '../composables/locale'
const route = useRoute()
const open = ref(false)
const { locale, setLocale } = useLocale()
const links = [
  ['/', '首页', 'Home'], ['/about', '关于', 'About'], ['/skills', '技能', 'Skills'],
  ['/projects', '项目', 'Projects'], ['/experience', '经历', 'Experience'],
  ['/research', '研究', 'Research'], ['/gallery', '图集', 'Gallery'],
  ['/blog', '笔记', 'Blog'], ['/contact', '联系', 'Contact'],
]
watch(() => route.fullPath, () => { open.value = false })
</script>

<template>
  <header class="site-header">
    <div class="shell header-inner">
      <RouterLink to="/" class="brand" aria-label="Aijia Song home"><span class="brand-mark">S<span>.</span></span><span class="brand-name">SONG AIJIA <small>PORTFOLIO</small></span></RouterLink>
      <nav class="desktop-nav" :aria-label="locale === 'zh' ? '主导航' : 'Main navigation'">
        <RouterLink v-for="[path, zh, en] in links" :key="path" :to="path" :class="{ active: path === '/' ? route.path === '/' : route.path.startsWith(path) }">{{ locale === 'zh' ? zh : en }}</RouterLink>
      </nav>
      <div class="header-actions">
        <button class="language-switch" type="button" :aria-label="locale === 'zh' ? '切换英文' : 'Switch to Chinese'" @click="setLocale(locale === 'zh' ? 'en' : 'zh')">{{ locale === 'zh' ? 'EN' : '中' }}</button>
        <RouterLink to="/resume" class="header-resume">{{ locale === 'zh' ? '简历' : 'Resume' }} <ArrowUpRight :size="14" /></RouterLink>
        <button class="menu-toggle" type="button" :aria-expanded="open" aria-controls="mobile-nav" :aria-label="open ? 'Close menu' : 'Open menu'" @click="open = !open"><X v-if="open" :size="22" /><Menu v-else :size="22" /></button>
      </div>
    </div>
    <nav v-if="open" id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation"><RouterLink v-for="[path, zh, en] in links" :key="path" :to="path">{{ locale === 'zh' ? zh : en }}</RouterLink><RouterLink to="/resume">{{ locale === 'zh' ? '简历' : 'Resume' }}</RouterLink></nav>
  </header>
</template>
