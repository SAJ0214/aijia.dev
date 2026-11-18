<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useLocale } from '../composables/locale'
const {locale}=useLocale()
</script>
<template><div class="shell content-section" style="min-height:60vh;display:grid;align-content:center"><p class="eyebrow">404 / NOT FOUND</p><h1 style="font-size:48px;color:#173d66">{{ locale==='zh'?'这里还没有内容。':'Nothing here yet.' }}</h1><RouterLink to="/" class="button button-primary" style="width:max-content">{{ locale==='zh'?'返回首页':'Back home' }} →</RouterLink></div></template>
