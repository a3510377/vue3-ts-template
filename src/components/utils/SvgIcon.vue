<template>
  <svg v-once aria-hidden="true" class="svg-icon-spin">
    <use :xlink:href="symbolId" :fill="color" :color="color" />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

// eslint-disable-next-line vue/no-setup-props-destructure
const {
  name,
  prefix = 'icon',
  width: propsWidth,
  height: propsHeight,
  size,
} = defineProps<{
  name: string;
  prefix?: string;
  color?: string;
  size?: string;
  width?: string;
  height?: string;
}>();

const symbolId = computed(() => `#${prefix}-${name}`);
const width = propsWidth ?? size ?? '32px';
const height = propsHeight ?? size ?? '32px';
</script>
<style lang="scss" scoped>
.svg-icon-spin {
  width: v-bind('width');
  height: v-bind('height');
  vertical-align: middle;
}
</style>
