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
    justify-content: flex-end;

    &-wrapper {
      padding: 0 $space-unit;
      flex: 0 0 auto;
      text-align: right;
    }

    &-link {
      color: inherit;
    }
  }
</style>
