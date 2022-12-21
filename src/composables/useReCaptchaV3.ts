import { IReCaptchaComposition } from 'vue-recaptcha-v3';
export async function useReCaptchaV3(useReCaptcha: IReCaptchaComposition) {
  const { executeRecaptcha, recaptchaLoaded } = useReCaptcha;
  // (可選) 等待直到 recaptcha 載入完成
  // (optional) Wait until recaptcha has been loaded.
  await recaptchaLoaded();
  // 執行 "login" 狀態的 reCAPTCHA
  // Execute reCAPTCHA with action "login".
  const token = await executeRecaptcha('login');
  // 後續傳給後端進行認證
  // Do stuff with the received token.
  console.log(token);
}
