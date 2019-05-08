<template>
  <div class="page-header">
    <div class="header-top">
      <div class="header-wrapper">
        <h1 class="page-title">{{ title }}</h1>
        <span class="page-desc">{{ desc }}</span>
      </div>
      <NavMenu class="nav-wrapper nav-wrapper--desktop" :navigationLinks="$site.themeConfig.nav"></NavMenu>
      <div class="btn-mobile-burger" v-on:click="toggleMobileMenu">
        <BurgerIcon :class="getButtonClass()" />
      </div>
    </div>
    <div class="header--mobile" v-if="mobileMenuOpen">
      <NavMenu class="nav-wrapper nav-wrapper--mobile" :navigationLinks="$site.themeConfig.nav"></NavMenu>
    </div>
  </div>
</template>

<script>
import NavMenu from "./NavMenu.vue";
import BurgerIcon from "./BurgerIcon.vue";

export default {
  name: 'Header',
  props: {
    title: String,
    desc: String,
    mobileMenuOpen: false,
  },
  components: {
    NavMenu,
    BurgerIcon,
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      console.log(this.mobileMenuOpen);
    },
    getButtonClass() {
      const iconModifier = this.mobileMenuOpen ? 'open' : 'closed';
      return `mobile-burger-icon mobile-burger-icon--${iconModifier}`;
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/vars.scss";
  $burger-width: 50px;
  $burger-height: 50px;

  .page-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: $header-height;
    background-color: $header-bg-color;
    color: $header-color;
    padding: $space-unit;

    .header--mobile {
      display: block;
    }
    .nav-wrapper--desktop {
      display: none;
    }
    .btn-mobile-burger {
      display: block;
    }
    .mobile-burger-icon {
      width: $burger-width;
      height: $burger-height;
      fill: $header-color;

      &--open {
        fill: darken($header-color, 25%);
      }
    }
  }

  .header-top {
    display: flex;

    .page-title {
      margin-top: 0;
      margin-bottom: 5px;
    }

    .header-wrapper {
      flex: 1 1 50%;
    }

    .nav-wrapper {
      flex: 2 1 50%;
      margin-top: $space-unit;
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
