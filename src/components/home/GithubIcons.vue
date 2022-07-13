<template>
  <!-- eslint-disable-next-line vue/valid-v-for vue/no-unused-vars -->
  <SvgIcon v-for="_ in 4" name="github-24x24" color="#000" class="logo" />
</template>

<style lang="scss" scoped>
.logo {
  width: 40px;
  height: 40px;
  padding: 0 5px;

  &:not(:last-child) {
    border-right: rgb(150 150 150) solid 2px;
  }
}
</style>
