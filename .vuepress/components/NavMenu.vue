<template>
  <nav class="page-nav">
    <div class="page-nav-wrapper" v-for="navLink in navigationLinks">
      <a class="page-nav-link"
      :href="navLink.link"
      :target="getLinkTarget(navLink)"
      rel="noreferrer"
      >{{ navLink.text }}</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    navigationLinks: Array,
  },
  methods: {
    getLinkTarget: (link) => {
      return link.external ? '_blank' : '_self';
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/vars.scss";

  .page-nav {
    display: flex;

    &-wrapper {
      padding: $space-unit / 2;
      flex: 1 1 auto;
      text-align: center;
    }

    &-link {
      color: inherit;
    }
  }
</style>
