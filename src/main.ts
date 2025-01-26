import { createApp } from 'vue';
import 'whatwg-fetch';

import AppComponents from './App.vue';

const bootstrap = async (): Promise<void | string> => {
    const app = createApp(AppComponents);

    app.mount('#app');
};

bootstrap();
