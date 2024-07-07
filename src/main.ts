import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./vue/router";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import Aura from "@primevue/themes/aura";
import App from "./App.vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import "./views/styles/global.css";
import "primeicons/primeicons.css";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia)
    .use(router)
    .use(PrimeVue, {
        theme: {
            preset: Aura,
        },
    })
    .use(ToastService);

app.mount("#app");
