<template>
  <section>
    <h1>Userid</h1>
  </section>
</template>

<script lang="ts" setup>
const route = useRoute();
import { useUserStore } from '../../stores/userStore';

const userStore = useUserStore();
const userId = userStore.user;

</script>