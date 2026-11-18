<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowUpRight } from 'lucide-vue-next'
import { profile } from '../data/profile'
import { useLocale } from '../composables/locale'
const { locale } = useLocale()
</script>
<template>
  <footer class="site-footer"><div class="shell footer-grid"><div><div class="footer-brand">SA<span>.</span></div><p>{{ locale === 'zh' ? '让想法成为能运行的系统。' : 'Ideas made real on working systems.' }}</p></div><div class="footer-links"><RouterLink to="/projects">{{ locale === 'zh' ? '探索项目' : 'Explore projects' }} <ArrowUpRight :size="15" /></RouterLink><RouterLink to="/contact">{{ locale === 'zh' ? '取得联系' : 'Get in touch' }} <ArrowUpRight :size="15" /></RouterLink><a :href="profile.github" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight :size="15" /></a></div></div><div class="shell footer-bottom"><span>© {{ new Date().getFullYear() }} {{ locale === 'zh' ? '宋爱家' : 'Aijia Song' }}</span><span>Built with curiosity & care</span></div></footer>
</template>
