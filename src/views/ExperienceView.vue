<script setup lang="ts">
import { milestones } from '../data/profile'
import { awards } from '../data/awards'
import { useLocale } from '../composables/locale'
import { useReveal } from '../composables/reveal'
import { asset } from '../utils/asset'

const { locale, t } = useLocale()
useReveal()
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="shell">
        <p class="eyebrow">EXPERIENCE / 竞赛与实践</p>
        <h1>{{ locale === 'zh' ? '一路动手，一路成长。' : 'Learning by doing.' }}</h1>
        <p>{{ locale === 'zh' ? '竞赛、原型和课程学习组成了我的成长路径。' : 'Competitions, prototypes, and study form my learning path.' }}</p>
      </div>
    </section>
    <div class="shell content-section">
      <div class="timeline">
        <div v-for="item in milestones" :key="item.date" class="timeline-item" data-reveal>
          <span class="timeline-date">{{ item.date }}</span>
          <div><h3>{{ t(item.title) }}</h3><p>{{ t(item.detail) }}</p></div>
        </div>
      </div>
      <div class="glass-card info-card" style="max-width:840px;margin:auto">
        <h3>{{ locale === 'zh' ? '组织与协作' : 'Organization & collaboration' }}</h3>
        <p>{{ locale === 'zh' ? '曾担任校人工智能社团社长、机器人队队长，并在竞赛中承担操作、调试和训练协调。' : 'Served as president of a school AI club and captain of a robotics team, with roles in operation, debugging, and practice coordination.' }}</p>
      </div>
      <div class="section-heading" style="margin-top:76px">
        <p class="eyebrow">RECOGNITION</p>
        <h2>{{ locale === 'zh' ? '竞赛与作品奖项' : 'Competition & project awards' }}</h2>
        <p class="section-description">{{ locale === 'zh' ? '点击证书可查看完整图片。' : 'Open a certificate to view it in full.' }}</p>
      </div>
      <div class="gallery-grid certificate-grid">
        <a v-for="award in awards" :key="award.id" class="glass-card certificate-card" :href="asset(award.image)" target="_blank" rel="noopener noreferrer" :aria-label="`${t(award.title)}，${t(award.result)}`">
          <div class="certificate-image"><img :src="asset(award.image)" :alt="`${t(award.title)}：${t(award.result)}`" loading="lazy" decoding="async"></div>
          <div class="certificate-copy"><span class="eyebrow">{{ award.date }}</span><h3>{{ t(award.title) }}</h3><p>{{ t(award.result) }}</p><span class="certificate-open">{{ locale === 'zh' ? '查看证书 ↗' : 'Open certificate ↗' }}</span></div>
        </a>
      </div>
    </div>
  </div>
</template>
