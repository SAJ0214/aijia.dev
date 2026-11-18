<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; description?: string }>()
</script>
<template><div class="section-heading" data-reveal><p class="eyebrow">{{ eyebrow }}</p><h2>{{ title }}</h2><p v-if="description" class="section-description">{{ description }}</p></div></template>
