import { createApp } from 'vue';
import 'whatwg-fetch';
import AppComponents from './App.vue';
import { setupRouter } from './router';
const bootstrap = async () => {
    const app = createApp(AppComponents);
    const router = setupRouter(app);
    await router.isReady();
    app.mount('#app');
};
bootstrap();
//# sourceMappingURL=main.js.map