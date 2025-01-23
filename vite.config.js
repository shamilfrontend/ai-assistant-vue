import { resolve } from 'path';
/* eslint-disable import/no-extraneous-dependencies */
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';
/* eslint-enable import/no-extraneous-dependencies */
export default defineConfig(() => {
    return {
        plugins: [
            vue(),
            legacy({
                targets: ['defaults', 'not IE 11']
            })
        ],
        css: { postcss: { plugins: [autoprefixer()] } },
        server: {
            port: 9000,
            proxy: {
                '/api': {
                    target: 'https://ppr-v3.transitcard.ru/',
                    changeOrigin: true
                }
            }
        },
        build: {
            rollupOptions: {
                output: {
                    manualChunks: {
                        utils: ['date-fns', 'lodash-es', 'pinia'],
                        components: []
                    }
                }
            }
        },
        resolve: {
            alias: [
                // @/xxxx => src/xxxx
                {
                    find: /^@\/(.+)/,
                    replacement: `${resolve(__dirname, 'src')}/$1`
                },
                // #/type => types
                {
                    find: /^#\/types$/,
                    replacement: `${resolve(__dirname, 'types')}`
                },
                // #/types/xxxx => types/xxxx
                {
                    find: /^#\/types\/(.+)/,
                    replacement: `${resolve(__dirname, 'types')}/$1`
                }
            ]
        }
    };
});
//# sourceMappingURL=vite.config.js.map