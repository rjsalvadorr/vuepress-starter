<template>
  <div class="page-header">
    <div class="header-top">
      <div class="header-wrapper">
        <h1 class="page-title">{{ title }}</h1>
        <span class="page-desc">{{ desc }}</span>
      </div>
      <NavMenu class="nav-wrapper" :navigationLinks="$site.themeConfig.nav"></NavMenu>
      <div class="btn-mobile-burger" v-on:click="toggleMobileMenu">
        <BurgerIcon :class="getButtonClass()" />
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from "./NavMenu.vue";
import BurgerIcon from "./BurgerIcon.vue";

export default {
  name: 'Header',
  data: function () {
    return {
      mobileMenuOpen: false,
    }
  },
  props: {
    title: String,
    desc: String,
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

  .page-header {
    padding: $space-unit;
  }
</style>
