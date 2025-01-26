import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';
import { defineConfig, type UserConfig } from 'vite';

export default defineConfig((): UserConfig => {
    return {
        plugins: [
            vue(),
            legacy({ targets: ['defaults', 'not IE 11'] })
        ],

        css: {
            postcss: {
                plugins: [
                    autoprefixer()
                ]
            }
        },

        server: {
            port: 9000,

            proxy: {
                '/api': {
                    target: 'https://ya.ru/',
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
