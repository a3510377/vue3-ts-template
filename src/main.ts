// import { createApp } from 'vue';
import { ViteSSG } from 'vite-ssg';
import 'virtual:svg-icons-register';

import router from './router';

import '@/scss/main.scss';
import store from './stores';

import App from '@/layouts/default.vue';
import SvgIconComponent from '@/components/utils/SvgIcon.vue';

export const createApp = ViteSSG(
  App,
  router,
  ({ app }) => {
    app.use(store);
    app.component('SvgIcon', SvgIconComponent);
  },
  { rootContainer: '#app-mount' }
);
