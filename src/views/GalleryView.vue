<script setup lang="ts">
import { useLocale } from '../composables/locale'
import { asset } from '../utils/asset'
import { awards } from '../data/awards'
const { locale, t } = useLocale()
const photos = [
  ['media/portfolio-1.jpg', 'RoboMaster 比赛现场', 'RoboMaster competition'],
  ['media/robomaster-field.jpg', 'RoboMaster 场地与比赛设备', 'RoboMaster field and equipment'],
  ['media/portfolio-2.jpg', '智能骑行辅助系统原型', 'Smart cycling prototype'],
  ['media/portfolio-3.jpg', '硬件接线与设备调试', 'Hardware integration'],
  ['media/robot-hardware.jpg', '机器人硬件结构', 'Robot hardware assembly'],
  ['media/raspberry-pi-terminal.jpg', '树莓派开发终端', 'Raspberry Pi development terminal'],
  ['media/english-platform.png', '英语学习平台界面', 'English learning platform interface'],
] as const
</script>
<template><div><section class="page-hero"><div class="shell"><p class="eyebrow">GALLERY / 项目图集</p><h1>{{ locale === 'zh' ? '在现场，在工作台。' : 'On the field. At the workbench.' }}</h1><p>{{ locale === 'zh' ? '照片、界面截图与获奖证书来自提供的项目材料。' : 'Photos, interface screenshots, and certificates come from the supplied project materials.' }}</p></div></section><div class="shell content-section"><div class="section-heading"><p class="eyebrow">PROJECT MOMENTS</p><h2>{{ locale === 'zh' ? '项目现场' : 'Project moments' }}</h2></div><div class="gallery-grid"><figure v-for="[src, zh, en] in photos" :key="src" class="glass-card gallery-item"><img :src="asset(src)" :alt="locale === 'zh' ? zh : en" loading="lazy" decoding="async"><figcaption>{{ locale === 'zh' ? zh : en }}</figcaption></figure></div><div class="section-heading" style="margin-top:76px"><p class="eyebrow">AWARDS & CERTIFICATES</p><h2>{{ locale === 'zh' ? '获奖证书' : 'Award certificates' }}</h2><p class="section-description">{{ locale === 'zh' ? '点击证书可查看完整图片。' : 'Open a certificate to view it in full.' }}</p></div><div class="gallery-grid certificate-grid"><a v-for="award in awards" :key="award.id" class="glass-card certificate-card" :href="asset(award.image)" target="_blank" rel="noopener noreferrer" :aria-label="`${t(award.title)}，${t(award.result)}`"><div class="certificate-image"><img :src="asset(award.image)" :alt="`${t(award.title)}：${t(award.result)}`" loading="lazy" decoding="async"></div><div class="certificate-copy"><span class="eyebrow">{{ award.date }}</span><h3>{{ t(award.title) }}</h3><p>{{ t(award.result) }}</p><span class="certificate-open">{{ locale === 'zh' ? '查看证书 ↗' : 'Open certificate ↗' }}</span></div></a></div></div></div></template>
