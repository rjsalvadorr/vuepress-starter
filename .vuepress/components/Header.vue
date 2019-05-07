<template>
  <div :class="`page-header page-header--${viewportType}`">
    <div class="header--desktop">
      <div class="header-wrapper">
        <h1 class="page-title">{{ title }}</h1>
        <span class="page-desc">{{ desc }}</span>
      </div>
      <NavMenu class="nav-wrapper nav-wrapper--desktop" :navigationLinks="$site.themeConfig.nav"></NavMenu>
      <div class="btn-mobile-burger"></div>
    </div>
    <div class="header--mobile">
      <NavMenu class="nav-wrapper nav-wrapper--mobile" :navigationLinks="$site.themeConfig.nav"></NavMenu>
    </div>
  </div>
</template>

<script>
import NavMenu from "./NavMenu.vue";

export default {
  name: 'Header',
  props: {
    title: String,
    desc: String,
    viewportType: String,
  },
  components: {
    NavMenu,
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/vars.scss";

  .header--desktop {
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

    .btn-mobile-burger {
      width: 100px;
      height: 100px;
      background-color: #ff0000;
    }
  }

  .page-header {
    background-color: $header-bg-color;
    color: $header-color;
    padding: $space-unit;
  }

  .page-header {
    .header--mobile {
      display: block;
    }
    .nav-wrapper--desktop {
      display: none;
    }
    .btn-mobile-burger {
      display: block;
    }
  }

  /* Larger than tablet */
  @media (min-width: 750px) {
    .page-header {
      .header--mobile {
        display: none;
      }
      .nav-wrapper--desktop {
        display: flex;
      }
      .btn-mobile-burger {
        display: none;
      }
    }
  }
</style>
