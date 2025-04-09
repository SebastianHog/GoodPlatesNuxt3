<template>
  <div v-if="sidebarState">
    <section class="sidebar-wrapper" :class="hide">
      <div class="sidebar-body">
        <user-icon :user="user"></user-icon>
        <ul class="options-list">
          <li v-for="option in coreData.sidebar.options">
            <site-button variant="transparent" :to="option.path">
              <p class="sidebar-option-label">{{ option.label }}</p>
            </site-button>
          </li>
        </ul>
      </div>
    </section>
    <div class="overlay">
      <img src="../../assets/site_icons/close_icon.svg" alt="close" class="close-button" @click="close">
    </div>
  </div>
</template>

<script lang="ts" setup>
import './style.scss';
import { storeToRefs } from 'pinia';
import coreData from '~/data/core.json'

const utilsStore = useUtilsStore();
const userStore = useUserStore();

const hide = ref('');
const { user } = storeToRefs(userStore);


const close = () => {
  hide.value = 'sidebar-is-closing';

  setTimeout(() => {
    utilsStore.toggleSidebar(false);
    hide.value = '';
  }, 245);
}

const sidebarState = computed(() => utilsStore.sidebarOpen);
</script>
