<template>
  <div v-if="sidebarState" class="sidebar-mobile">
    <section class="sidebar-wrapper" :class="hide">
      <div class="sidebar-body">
        <div class="sidebar-user">
          <user-icon redirect v-if="user" :user="user" class="sidebar-user-icon" />
          <span v-if="user?.username">{{ user.username }}</span>
          <div v-else style="display: flex; justify-content: center; align-items: center;">
            <site-button variant="transparent" to="/login" class="log-in-label">Log in</site-button>
            <p style="font-size: 16px;">or</p>
            <site-button variant="transparent" to="/register" class="log-in-label">Register</site-button>

          </div>
        </div>
        <ul class="options-list">
          <li v-for="option in data.sidebar.options">
            <site-button variant="transparent" :to="option.path" @click="close">
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
      <CloseIcon class="close-button" @click="close" />
    </div>
  </div>

  <div v-if="sidebarState" class="dropdown-desktop" :class="hide">
    <CloseIcon class="close-button" @click="close" />

    <ul class="options-list">
      <li v-for="option in data.sidebar.options">
        <site-button variant="transparent" :to="option.path" @click="close">
          <p class="dropdown-option-label">{{ option.label }}</p>
        </site-button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import './style.scss';
import { storeToRefs } from 'pinia';
import data from '~/data/menus-buttons.json'
import CloseIcon from '~/assets/site_icons/CloseIcon.vue';


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
