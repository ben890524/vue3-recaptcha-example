import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { VueReCaptcha } from 'vue-recaptcha-v3';

const app = createApp(App);
app.use(VueReCaptcha, {
  // 請換成你註冊的 SiteKey
  // Please change to your SiteKey.
  siteKey: '*****************************',
  loaderOptions: {
    useRecaptchaNet: true,
  },
});
app.mount('#app');
