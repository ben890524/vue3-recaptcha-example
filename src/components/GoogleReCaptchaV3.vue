<template>
  <div class="v3-margin">
    <button type="button" @click="useReCaptchaV3(useReCaptchaInstance)">Submit to active reCaptcha</button>
  </div>
</template>
<script setup lang="ts">
import { useReCaptcha } from 'vue-recaptcha-v3';
import { useReCaptchaV3 } from '../composables/useReCaptchaV3';
const useReCaptchaInstance = useReCaptcha()!;
</script>
<style scoped lang="css">
.v3-margin {
  margin-top: 20px;
}
</style>
