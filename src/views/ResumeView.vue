<script setup lang="ts">
import { Download, ExternalLink } from 'lucide-vue-next'
import { profile } from '../data/profile'
import { asset } from '../utils/asset'
import { useLocale } from '../composables/locale'
const {locale}=useLocale()
</script>
<template><div><section class="page-hero"><div class="shell"><p class="eyebrow">RESUME / 简历</p><h1>{{ locale==='zh'?'简历与项目概览。':'Resume & overview.' }}</h1><p>{{ locale==='zh'?'下载原始 PDF 简历，了解教育背景、技术方向与项目实践。':'Download the original PDF resume for education, technical focus, and project experience.' }}</p></div></section><div class="shell content-section"><div class="glass-card info-card" style="max-width:760px"><p class="eyebrow">PDF / DOCUMENT</p><h3 style="font-size:23px">{{ locale==='zh'?'宋爱家 · 个人技术简历':'Aijia Song · Technical Resume' }}</h3><p>{{ locale==='zh'?'文件来自提供的简历资料。部分内容可能与网站更新节奏不同，以 PDF 原文为准。':'The PDF is from the supplied resume. Its contents may be updated on a different schedule than this site.' }}</p><div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:26px"><a :href="asset(profile.resume)" download="宋爱家_个人技术简历.pdf" class="button button-primary"><Download :size="18" /> {{ locale==='zh'?'下载 PDF':'Download PDF' }}</a><a :href="asset(profile.resume)" target="_blank" rel="noopener noreferrer" class="button button-outline"><ExternalLink :size="17" /> {{ locale==='zh'?'在线查看':'Open PDF' }}</a></div></div></div></div></template>
