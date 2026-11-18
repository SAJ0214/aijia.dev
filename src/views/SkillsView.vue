<script setup lang="ts">
import { ref } from 'vue'
import { skills } from '../data/profile'
import { useLocale } from '../composables/locale'
import { useReveal } from '../composables/reveal'
const { locale, t } = useLocale(); useReveal()
const selected = ref(0)
</script>
<template><div><section class="page-hero"><div class="shell"><p class="eyebrow">SKILLS / 技术能力</p><h1>{{ locale === 'zh' ? '连接软件与真实世界。' : 'Connecting software to the real world.' }}</h1><p>{{ locale === 'zh' ? '能力图谱以材料中有实际使用记录的工具与方向为基础，点击类别查看技术组合。' : 'This map includes tools and areas supported by documented practice. Select a field to explore.' }}</p></div></section><div class="shell content-section"><div class="filter-row"><button v-for="(group,i) in skills" :key="i" class="filter-button" :class="{active:selected===i}" @click="selected=i">{{ t(group.group) }}</button></div><div class="glass-card" style="padding:32px;min-height:260px"><p class="eyebrow">TECHNOLOGY MAP / 0{{ selected+1 }}</p><h2 style="font-size:28px;color:#173e68;margin:12px 0 28px">{{ t(skills[selected]!.group) }}</h2><div class="skill-map"><span v-for="item in skills[selected]!.items" :key="item" class="skill-node">{{ item }}</span></div><p class="muted" style="font-size:12px;margin-top:35px">{{ locale === 'zh' ? '此图表示接触与实践方向，不代表熟练度排名。' : 'The map shows areas of practice, not proficiency rankings.' }}</p></div></div></div></template>
<style scoped>.skill-map{display:flex;align-items:center;flex-wrap:wrap;gap:18px}.skill-node{display:grid;place-items:center;min-width:128px;min-height:72px;padding:12px 18px;border:1px solid #b7dbf0;border-radius:12px;background:linear-gradient(135deg,#eef9ff,#fff);color:#17649c;font-size:14px;font-weight:800;box-shadow:0 10px 20px #267db00c;transition:transform .2s,box-shadow .2s}.skill-node:hover{transform:translateY(-4px);box-shadow:0 15px 25px #267db021}</style>
