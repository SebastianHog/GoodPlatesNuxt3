<template>
  <section class="sidebar-wrapper">
    <div class="sidebar-body">
      sidebar body
    </div>
  </section>
  <div class="overlay">
    <img src="../../assets/site_icons/close_icon.svg" alt="close" class="close-button" @click="close">
  </div>
</template>

<script lang="ts" setup>
import './style.scss';

const utilsStore = useUtilsStore();

const close = () => {
  console.log('close overlay');
  utilsStore.toggleScrolling();
}
</script>