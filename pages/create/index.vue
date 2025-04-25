<template>
  <section class="create-recipe-page-wrapper">
    <div class="add-image-wrapper">
      <div v-if="displayImage" class="added-image-wrapper">
        <CloseIcon @click="removeImage" alt="remove image" class="remove-image-icon" />
        <img :src="imageUrl" alt="image" class="added-image" />
      </div>
      <div v-else>
        <input type="text" :placeholder="imagUrlPlaceholder" class="add-image-input" v-model="imageUrl" />
        <site-button @click="appendImage" class="add-image-action">Add image</site-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import './style.scss';
import core from '~/data/core.json';
import CloseIcon from '~/assets/site_icons/CloseIcon.vue';

const imageUrl = ref('');
let displayImage = ref(false);

const imagUrlPlaceholder = core.pages.createRecipe.imageUrlPlaceholder;


const appendImage = () => {
  displayImage.value = true;
}

const removeImage = () => {
  displayImage.value = false;
  imageUrl.value = '';
}

</script>
