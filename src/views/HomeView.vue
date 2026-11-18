<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDownRight, ArrowUpRight, ArrowRight, Cpu, ScanEye, Bot } from 'lucide-vue-next'
import SectionTitle from '../components/SectionTitle.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { profile, skills } from '../data/profile'
import { projects } from '../data/projects'
import { useLocale } from '../composables/locale'
import { useReveal } from '../composables/reveal'
import { asset } from '../utils/asset'
const { locale, t } = useLocale()
const featured = computed(() => projects.filter(project => project.featured))
useReveal()
</script>

<template>
  <div class="home-page">
    <section class="hero shell">
      <div class="hero-copy" data-reveal>
        <div class="hero-kicker"><span class="live-dot"></span>{{ locale === 'zh' ? '工程实践 / 视觉探索 / 机器人' : 'ENGINEERING / VISION / ROBOTICS' }}</div>
        <h1>{{ locale === 'zh' ? '从想法，到' : 'From ideas to' }}<br><span>{{ locale === 'zh' ? '真实运行。' : 'working systems.' }}</span></h1>
        <p class="hero-lead">{{ t(profile.statement) }}</p>
        <p class="hero-intro">{{ t(profile.intro) }}</p>
        <div class="hero-actions"><RouterLink to="/projects" class="button button-primary">{{ locale === 'zh' ? '探索项目' : 'Explore projects' }} <ArrowUpRight :size="18" /></RouterLink><RouterLink to="/about" class="button button-outline">{{ locale === 'zh' ? '了解我' : 'About me' }} <ArrowRight :size="17" /></RouterLink></div>
        <div class="hero-footnote"><span>01 / {{ locale === 'zh' ? '以实践为起点' : 'Built from practice' }}</span><span class="hero-foot-line"></span><span>{{ t(profile.location) }}</span></div>
      </div>
      <div class="hero-visual" data-reveal>
        <div class="hero-visual-grid"></div><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
        <div class="visual-core"><div class="visual-core-inner"><span class="core-ring"></span><span class="core-center">SA<span>.</span></span><span class="core-mini core-mini-a"></span><span class="core-mini core-mini-b"></span></div></div>
        <div class="visual-label label-top"><ScanEye :size="18" /><span>COMPUTER VISION<small>Detect · Understand</small></span></div>
        <div class="visual-label label-right"><Cpu :size="18" /><span>EMBEDDED SYSTEMS<small>Connect · Validate</small></span></div>
        <div class="visual-label label-bottom"><Bot :size="18" /><span>ROBOTICS<small>Build · Iterate</small></span></div>
        <div class="visual-index">SYSTEM / 001 <span>● ACTIVE</span></div>
      </div>
      <a class="scroll-cue" href="#featured"><span>{{ locale === 'zh' ? '向下探索' : 'Scroll to explore' }}</span><ArrowDownRight :size="16" /></a>
    </section>

    <section class="intro-band"><div class="shell intro-band-inner"><span class="band-label">ABOUT THE WORK</span><p>{{ locale === 'zh' ? '关注从模型训练、设备部署到软硬件联调的完整链路，也珍惜在团队中一起定位问题、把原型做出来的过程。' : 'I explore the full path from model training and deployment to hardware integration, while enjoying the teamwork behind a working prototype.' }}</p><RouterLink to="/about" class="text-link">{{ locale === 'zh' ? '我的故事' : 'My story' }} <ArrowUpRight :size="17" /></RouterLink></div></section>

    <section id="featured" class="section shell featured-section"><div class="section-top"><SectionTitle eyebrow="01 / SELECTED WORK" :title="locale === 'zh' ? '精选项目' : 'Selected work'" :description="locale === 'zh' ? '从竞赛现场到设备原型，以可验证的过程记录每一次探索。' : 'From competition floors to physical prototypes, each story is grounded in documented work.'" /><RouterLink to="/projects" class="text-link section-link">{{ locale === 'zh' ? '查看全部项目' : 'All projects' }} <ArrowUpRight :size="17" /></RouterLink></div><div class="project-grid"><ProjectCard v-for="(project, index) in featured" :key="project.slug" :project="project" :index="index" /></div></section>

    <section class="section expertise-section"><div class="shell"><SectionTitle eyebrow="02 / CAPABILITIES" :title="locale === 'zh' ? '技术方向' : 'What I work with'" :description="locale === 'zh' ? '以实际项目中的使用经历为依据，持续拓展技术边界。' : 'Technologies used in documented practice, with room to keep growing.'" /><div class="expertise-grid"><div v-for="(group, index) in skills" :key="index" class="expertise-card" data-reveal><span class="expertise-number">0{{ index + 1 }}</span><component :is="[Cpu, ScanEye, Bot][index]" :size="28" :stroke-width="1.7" /><h3>{{ t(group.group) }}</h3><div class="skill-pills"><span v-for="item in group.items" :key="item">{{ item }}</span></div></div></div><RouterLink to="/skills" class="text-link expertise-more">{{ locale === 'zh' ? '查看能力图谱' : 'Explore skill map' }} <ArrowUpRight :size="17" /></RouterLink></div></section>

    <section class="section story-section shell"><div class="story-image" data-reveal><img :src="asset('media/portfolio-1.jpg')" alt="RoboMaster competition team debugging a robot" loading="lazy"><div class="image-caption">FIELD NOTES <span>01 / ROBOTICS</span></div></div><div class="story-copy" data-reveal><p class="eyebrow">03 / THE APPROACH</p><h2>{{ locale === 'zh' ? '把每个问题，' : 'A practice shaped' }}<br><em>{{ locale === 'zh' ? '带回真实场景。' : 'by real constraints.' }}</em></h2><p>{{ locale === 'zh' ? '竞赛现场的排障、传感器的调试、模型在设备上的部署，让我理解工程并非停留在演示画面。每一次联调，都是让系统更接近真实使用的一步。' : 'Troubleshooting at competitions, tuning sensors, and deploying models on devices have taught me to carry ideas beyond a demo. Each integration step brings a system closer to real use.' }}</p><RouterLink to="/experience" class="button button-outline">{{ locale === 'zh' ? '查看成长经历' : 'Explore experience' }} <ArrowUpRight :size="17" /></RouterLink></div></section>

    <section class="contact-banner"><div class="shell contact-banner-inner"><div><p class="eyebrow">LET'S CONNECT</p><h2>{{ locale === 'zh' ? '下一次探索，从交流开始。' : 'Every new idea starts with a conversation.' }}</h2><p>{{ locale === 'zh' ? '欢迎交流机器人、视觉与软硬件项目。' : 'Open to conversations about robotics, vision, and hardware projects.' }}</p></div><RouterLink to="/contact" class="button button-light">{{ locale === 'zh' ? '联系我' : 'Get in touch' }} <ArrowUpRight :size="18" /></RouterLink></div></section>
  </div>
</template>
