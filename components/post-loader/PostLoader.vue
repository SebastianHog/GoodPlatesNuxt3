<template>
  <div class="product-card-wrapper loader-bg"></div>
</template>

<style lang="scss">
@use '~/assets/styles/setup' as *;

@keyframes loaderPulse {
  0% {
    left: 0%;
  }

  50% {
    left: 100%
  }

  100% {
    left: 0%;
  }
}

.loader-bg::after {
  animation: loaderPulse 2s infinite ease-in-out;
  content: "";
  width: 0px;
  height: 100%;
  background: $primary-color;
  box-shadow: 0 0 toRem(145) toRem(94) $primary-color;
  -webkit-box-shadow: 0 0 toRem(145) toRem(94) $primary-color;
  -moz-box-shadow: 0 0 toRem(145) toRem(94) $primary-color;
  position: absolute;
}

.loader-bg {
  opacity: 25%;
  height: 100%;
  position: relative;
}
</style>