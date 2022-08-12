<template>
  <Head>
    <title>{{ title }}</title>
    <meta property="og:title" :content="title" />
    <meta property="og:site_name" :content="title" />
    <meta property="twitter:title" :content="title" />

    <meta name="description" :content="description" />
    <meta property="og:description" :content="description" />
    <meta property="twitter:description" :content="description" />

    <meta name="keywords" :content="keywords" />

    <meta property="og:image" :content="image" />
    <meta property="og:image:secure_url" :content="image" />
    <meta property="twitter:image" :content="image" />

    <meta name="theme-color" content="#ffffff" />
    <meta property="og:type" content="website" />
    <meta property="twitter:card" content="summary_large_image" />

    <meta name="abstract" content="vue-template" />
    <meta name="subject" content="vue-template" />
  </Head>
</template>

<script lang="ts" setup>
import { Head } from '@vueuse/head';

const props = defineProps<{
  title?: string;
  pageTitle?: string;
  keywords?: string[];
  description?: string;
  image?: string;
}>();

const pageTitle = props.pageTitle || '';

let _title: string | void = void 0;
if (pageTitle) _title = `vue3-typescript-template | ${pageTitle}`;

const image = props.image || '/favicon.ico';
const keywords = (
  props.keywords || [
    'vue',
    'vue3',
    'vue-router',
    'vue-ts',
    'typescript',
    'yarn',
    'vite',
    'pinia',
    'vite-ssg',
    'template',
  ]
)?.join(',');

const description =
  props.description ||
  `${[
    'vue',
    'vue3',
    'vue-router',
    'vue-ts',
    'typescript',
    'yarn',
    'vite',
    'pinia',
    'vite-ssg',
    'template',
  ].join(', ')} demo. 開發人員: 猴子(猴貓)`;

const title = _title || props.title || 'vue3-typescript-template';
</script>
