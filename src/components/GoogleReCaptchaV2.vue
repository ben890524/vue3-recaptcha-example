<template>
  <vue-recaptcha
    :sitekey="instance_vueRecaptchaV2.data_v2SiteKey"
    size="normal"
    theme="light"
    hl="zh-TW"
    @verify="instance_vueRecaptchaV2.recaptchaVerified"
    @expire="instance_vueRecaptchaV2.recaptchaExpired"
    @fail="instance_vueRecaptchaV2.recaptchaFailed"
  />
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import vueRecaptcha from 'vue3-recaptcha2';
const instance_vueRecaptchaV2 = reactive({
  // 請換成你註冊的 SiteKey
  // Please change to your SiteKey.
  data_v2SiteKey: '*****************************',
  recaptchaVerified: (response_token: string) => {
    console.log(response_token);
    // 連接後端API，給後端進行認證
    // Connect to your Backend service.
  },
  recaptchaExpired: () => {
    // 驗證過期後進行的動作
    // After recaptcha is expired, the action you can do.
    console.log('驗證過期啦QAQ');
  },
  recaptchaFailed: () => {
    // 驗證失敗進行的動作
    // After recaptcha is failed, the action you can do.
  },
});
</script>
<style scoped lang="scss"></style>
