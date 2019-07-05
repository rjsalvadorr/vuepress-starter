<template>
  <div class="page-header">
    <div class="page-text">
      <a href="/"><h1 class="page-title">{{ title }}</h1></a>
      <span class="page-desc">{{ desc }}</span>
    </div>
    <NavMenu class="nav-wrapper" :navigationLinks="$site.themeConfig.nav"></NavMenu>
  </div>
</template>

<script>
import NavMenu from "./NavMenu.vue";

export default {
  name: 'Header',
  props: {
    title: String,
    desc: String,
  },
}
</script>

<style scoped lang="scss">
  @import "../styles/vars.scss";

  .page-header {
    background-color: $header-bg-color;
    color: $header-color;
    padding: $space-unit;
  }

  .page-text {
    padding-bottom: $space-unit / 2;
  }

  .page-title {
    margin-bottom: 0
  }
</style>
