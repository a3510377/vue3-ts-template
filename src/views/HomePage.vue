<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useAppStore } from '@/stores/modules/app';

const GithubIcons = defineAsyncComponent(
  () => import('@/components/home/GithubIcons.vue')
);

const appStore = useAppStore();

const technologies = [
  'vue',
  'typescript',
  'vue-router',
  'pinia',
  'eslint',
  'style-lint',
  'prettier',
];
</script>

<template>
  <div class="home-page">
    <SvgIcon name="vueLogo" class="vue-logo" />
    <ul class="technologies">
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <li v-for="technologie in technologies" v-once v-text="technologie" />
    </ul>
    <button @click="appStore.addCount()">count: {{ appStore.getCount }}</button>
    <hr />
    <div class="icons">
      <GithubIcons />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .vue-logo {
    width: 14em;
    height: 14em;
    @media all and (max-width: 500px) {
      width: 8em;
      height: 8em;
    }
  }

  hr {
    width: 80%;
    margin: 25px 0;
  }

  .technologies {
    display: flex;
    margin: 20px 0;
    font-size: 20px;
    list-style-type: none;

    li {
      margin: 0 4px;
    }
    @media all and (max-width: 500px) {
      flex-direction: column;
      list-style-type: disc;
    }
  }

  .icons {
    display: flex;

    :deep(svg) {
      width: 2.6em;
      height: 2.6em;
    }
  }
}
</style>
