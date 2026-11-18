<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <a class="skip-link" href="#main">跳转到内容 / Skip to content</a>
  <SiteHeader />
  <main id="main"><RouterView /></main>
  <SiteFooter />
</template>
