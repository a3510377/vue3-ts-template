/* eslint-disable import/no-extraneous-dependencies */

import 'vite-ssg';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';

import vue from '@vitejs/plugin-vue';

import svgIcon from './plugin/svgIcon';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_URL,
  plugins: [vue(), svgIcon()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  build: {
    terserOptions: {
      compress: {
        // Prevent Infinity from being compressed to 1/0, may cause performance issues on Chrome
        keep_infinity: true,
        drop_console: false,
      },
      format: { comments: false },
    },
    minify: 'terser',
    // Speed up packing
    brotliSize: false,
    chunkSizeWarningLimit: 2000,
  },
  ssgOptions: {
    rootContainerId: 'app-mount',
    formatting: 'minify',
    dirStyle: 'nested',
    script: 'async',
  },
});
