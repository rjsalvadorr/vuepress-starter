<template>
  <div class="page-header">
    <h1 class="page-title">{{ title }}</h1>
    <span class="page-desc">{{ desc }}</span>
    <NavMenu class="nav-wrapper" :navigationLinks="$site.themeConfig.nav"></NavMenu>
  </div>
</template>

<script>
import NavMenu from "../components/NavMenu.vue";

export default {
  name: 'Header',
  props: {
    title: Array,
    desc: Array,
  },
  components: {
    NavMenu,
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/vars.scss";

  .page-header {
    background-color: $header-bg-color;
    color: $header-color;
    padding: $space-unit;

    .page-title {
      margin-top: 0;
    }

    .nav-wrapper {
      margin-top: $space-unit;
    }
  }
</style>
