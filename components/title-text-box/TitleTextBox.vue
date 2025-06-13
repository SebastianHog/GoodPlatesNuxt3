<template>
  <section class="title-text-box-wrapper">
    <h2 class="title-text-box-title-text">{{ props.title }}</h2>
    <slot />
  </section>
</template>

<script lang="ts" setup>
import './style.scss'


interface TitleTextBoxProps {
  title: string,
}

const props = defineProps<TitleTextBoxProps>();
</script>