<template>
  <div class="page-header">
    <div class="header-wrapper">
      <h1 class="page-title">{{ title }}</h1>
      <span class="page-desc">{{ desc }}</span>
    </div>
    <NavMenu class="nav-wrapper" :navigationLinks="$site.themeConfig.nav"></NavMenu>
  </div>
</template>

<script>
import NavMenu from "../components/NavMenu.vue";

export default {
  name: 'Header',
  props: {
    title: String,
    desc: String,
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
    display: flex;

    .page-title {
      margin-top: 0;
      margin-bottom: 5px;
    }

    .header-wrapper {
      flex: 1 1 40%;
    }

    .nav-wrapper {
      flex: 2 1 60%;
      margin-top: $space-unit;
    }
  }
</style>
