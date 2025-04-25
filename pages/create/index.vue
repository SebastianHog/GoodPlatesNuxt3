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
    <div class="create-recipe-form-wrapper">
      <input type="text" :placeholder="recipeTitlePlaceholder" class="title-input" v-model="recipeTitle" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import './style.scss';
import core from '~/data/core.json';
import CloseIcon from '~/assets/site_icons/CloseIcon.vue';

const imageUrl = ref('');
const recipeTitle = ref('');
const recipeDescription = ref('');
let displayImage = ref(false);

const validImageEndings = ['jpg', 'jpeg', 'png', 'webp', 'avif', 'bmp'];

const imagUrlPlaceholder = core.pages.createRecipe.imageUrlPlaceholder;
const recipeTitlePlaceholder = core.pages.createRecipe.recipeTitlePlaceholder;

const appendImage = () => {
  if (!imageUrl.value || !validImageEndings.some((ending) => imageUrl.value.toLowerCase().endsWith(ending))) return;
  displayImage.value = true;
}

const removeImage = () => {
  displayImage.value = false;
  imageUrl.value = '';
}

</script>
