<script setup lang="ts">
import { Mail, Github, MapPin, MessageCircle } from 'lucide-vue-next'
import { profile } from '../data/profile'
import { useLocale } from '../composables/locale'
const {locale,t}=useLocale()
</script>
<template><div><section class="page-hero"><div class="shell"><p class="eyebrow">CONTACT / 联系方式</p><h1>{{ locale==='zh'?'一起聊聊下一步。':'Let’s talk about what’s next.' }}</h1><p>{{ locale==='zh'?'欢迎交流机器人、计算机视觉、嵌入式作品与合作想法。':'Open to conversations about robotics, computer vision, embedded projects, and collaboration.' }}</p></div></section><div class="shell content-section"><div class="contact-grid"><a class="glass-card contact-card" :href="`mailto:${profile.email}`"><Mail :size="27" /><div><h3>Email</h3><p>{{ profile.email }}</p></div></a><a class="glass-card contact-card" :href="profile.github" target="_blank" rel="noopener noreferrer"><Github :size="27" /><div><h3>GitHub</h3><p>SAJ0214</p></div></a><div class="glass-card contact-card"><MessageCircle :size="27" /><div><h3>WeChat</h3><p>{{ profile.wechat }}</p></div></div><div class="glass-card contact-card"><MapPin :size="27" /><div><h3>{{ locale==='zh'?'所在地':'Based in' }}</h3><p>{{ t(profile.location) }}</p></div></div></div></div></div></template>
