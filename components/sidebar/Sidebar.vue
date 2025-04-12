<template>
  <div v-if="sidebarState" class="sidebar-mobile">
    <section class="sidebar-wrapper" :class="hide">
      <div class="sidebar-body">
        <div class="sidebar-user">
          <user-icon redirect v-if="user" :user="user" />
          <span>{{ user?.username }}</span>
        </div>
        <ul class="options-list">
          <li v-for="option in coreData.sidebar.options">
            <site-button variant="transparent" :to="option.path">
              <p class="sidebar-option-label">{{ option.label }}</p>
            </site-button>
          </li>
        </ul>
        <aside class="sidebar-footer">
          <div>
            <p class="created-by">
              GoodPlates was created by
            </p>
            <span>
              Sebastian Högsander
            </span>
          </div>
          <div class="version-numbering">
            v0.0.1
          </div>
        </aside>
      </div>
    </section>
    <div class="overlay">
      <img src="../../assets/site_icons/close_icon.svg" alt="close" class="close-button" @click="close">
    </div>
  </div>
  <div v-if="sidebarState" class="dropdown-desktop">

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
    utilsStore.scrollingState(true);
    hide.value = '';
  }, 245);
}

const sidebarState = computed(() => utilsStore.sidebarOpen);
</script>
