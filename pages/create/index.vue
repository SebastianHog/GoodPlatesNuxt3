<template>
  <section class="create-recipe-page-wrapper">
    <div class="add-image-wrapper">
      <div>
        <input type="text" :placeholder="imagUrlPlaceholder" class="add-image-input" v-model="imageUrl">
        <site-button @click="appendNewImage" class="add-image-action">Add image</site-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import './style.scss';
import core from '~/data/core.json';

const imageUrl = ref('');

const imagUrlPlaceholder = core.pages.createRecipe.imageUrlPlaceholder;

const appendNewImage = () => {
  console.log(imageUrl.value);
}
</script>