<template>
  <section class="create-recipe-page-wrapper">
    <div class="add-image-wrapper">
      <div v-if="displayImage" class="added-image-wrapper">
        <CloseIcon @click="removeImage" alt="remove image" class="remove-image-icon" />
        <img :src="imageUrl" alt="image" class="added-image" />
      </div>

      <div v-else>
        <input type="text" :placeholder="imagUrlPlaceholder" class="add-image-input" v-model="imageUrl" />
        <site-button @click="appendImage" class="add-image-action">{{ core.pages.createRecipe.buttons.addImage
        }}</site-button>
      </div>
    </div>

    <div class="create-recipe-form-wrapper">
      <input type="text" :placeholder="recipeTitlePlaceholder" class="title-input" v-model="recipeTitle" />
      <textarea :placeholder="recipeDescriptionPlaceholder" v-model="recipeDescription"
        class="description-input"></textarea>
    </div>

    <div class="recipe-req-instructions">
      <div class="recipe-requirements">
        <h1 class="input-box-title">Requirements</h1>
        <div class="requirements-inner">
          <div class="item-input-wrapper">
            <div class="item-input-header">
              <h2 class="item-label">Item</h2>
              <h2 class="amount-label">Amount</h2>
              <h2 class="unit-label">Unit</h2>
            </div>

            <div class="input-requirements">
              <div class="item" v-for="(req, index) in requirements" :key="index">
                <input type="text" class="item-name" placeholder="Item" v-model="req.name" />
                <input type="text" class="item-amount" placeholder="Amount" v-model="req.amount" />
                <input type="text" class="item-unit" maxlength="10" placeholder="Unit" v-model="req.unit" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="recipe-instructions">
        <h1 class="input-box-title">Instructions</h1>
        <div v-for="(i, index) in stepCount" class="instruction-step" :key="index">
          <input v-model="i.name" type="text" class="step-name" placeholder="Step Name" maxlength="35" />
          <textarea v-model="i.description" class="recipe-steps-input" placeholder="Do it like this..." />
        </div>
      </div>
    </div>
    <site-button to="/" @click="uploadRecipe">{{ i18n.publish }}</site-button>
  </section>
</template>

<script lang="ts" setup>
import './style.scss';
import core from '~/data/core.json';
import CloseIcon from '~/assets/site_icons/CloseIcon.vue';

const userStore = useUserStore();

const i18n = {
  publish: core.pages.createRecipe.buttons.publishRecipe
}

interface Requirement {
  name: string
  amount: string
  unit: string
}

interface Steps {
  name: string
  description: string
}

const imageUrl = ref('');
const recipeTitle = ref('');
const recipeDescription = ref('');

let displayImage = ref(false);

const requirements = ref<Requirement[]>([
  { name: '', amount: '', unit: '' }
])
const stepCount = ref<Steps[]>([
  { name: '', description: '' }
])

const validImageEndings = ['jpg', 'jpeg', 'png', 'webp', 'avif', 'bmp'];

const imagUrlPlaceholder = core.pages.createRecipe.placeholderText.imageUrlPlaceholder;
const recipeTitlePlaceholder = core.pages.createRecipe.placeholderText.recipeTitlePlaceholder;
const recipeDescriptionPlaceholder = core.pages.createRecipe.placeholderText.recipeDescriptionPlaceholder;

const appendImage = () => {
  if (!imageUrl.value || !validImageEndings.some((ending) => imageUrl.value.toLowerCase().endsWith(ending))) return;
  displayImage.value = true;
}

const removeImage = () => {
  displayImage.value = false;
  imageUrl.value = '';
}

const uploadRecipe = () => {
  const filledRequirements = requirements.value.filter(
    ({ name, amount, unit }) =>
      Boolean(name.trim() || amount.trim() || unit.trim())
  )
  const filledSteps = stepCount.value.filter(
    ({ name, description }) =>
      Boolean(name.trim() || description.trim())
  )

  const recipe = {
    title: recipeTitle.value,
    description: recipeDescription.value,
    thumbnail: imageUrl.value,
    requirements: filledRequirements,
    steps: filledSteps,
    ...(userStore.user ? { creator: userStore.user } : {}),
  }

  console.log('Uploading recipe:', recipe);

  userStore.createRecipe(recipe);
}

watch(
  requirements,
  () => {
    while (requirements.value.length > 1) {
      const lastItem = requirements.value.at(-1)!
      const secondLast = requirements.value.at(-2)!
      const lastEmpty = !lastItem.name && !lastItem.amount && !lastItem.unit
      const secondLastEmpty = !secondLast.name && !secondLast.amount && !secondLast.unit
      if (lastEmpty && secondLastEmpty) {
        requirements.value.pop()
      } else {
        break
      }
    }

    const final = requirements.value.at(-1)!

    if (final.name || final.amount || final.unit) {
      requirements.value.push({ name: '', amount: '', unit: '' })
    }
  },
  { deep: true },
)

watch(
  stepCount,
  () => {
    while (stepCount.value.length > 1) {
      const lastItem = stepCount.value.at(-1)!
      const secondLast = stepCount.value.at(-2)!
      const lastEmpty = !lastItem.name && !lastItem.description
      const secondLastEmpty = !secondLast.name || !secondLast.description

      if (lastEmpty && secondLastEmpty) {
        stepCount.value.pop()
      } else {
        break
      }
    }

    const final = stepCount.value.at(-1)!
    if (final.name.length > 1 && final.description) {
      stepCount.value.push({ name: '', description: '' })
    }
  },
  { deep: true },
)

</script>
