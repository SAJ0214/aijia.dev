<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import MarkdownIt from 'markdown-it'
import { posts } from '../data/blog'
import { useLocale } from '../composables/locale'
const {locale,t}=useLocale(); const route=useRoute()
const post=computed(()=>posts.find(p=>p.slug===route.params.slug))
const md=new MarkdownIt({html:false,linkify:true,typographer:true})
const rendered=computed(()=>post.value?md.render(t(post.value.body)):'')
</script>
<template><div v-if="post"><section class="page-hero"><div class="shell"><RouterLink to="/blog" class="back-link">← {{ locale==='zh'?'返回笔记':'Back to notes' }}</RouterLink><p class="eyebrow">FIELD NOTE</p><h1>{{ t(post.title) }}</h1><p>{{ t(post.summary) }}</p></div></section><article class="shell content-section prose markdown-body" v-html="rendered"></article></div><div v-else class="shell content-section"><h1>{{ locale==='zh'?'文章未找到':'Post not found' }}</h1><RouterLink to="/blog">{{ locale==='zh'?'返回笔记':'Back to notes' }}</RouterLink></div></template>
