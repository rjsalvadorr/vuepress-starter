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
    justify-content: space-between;

    &-wrapper {
      flex: 0 1 auto;
      text-align: center;
    }

    &-link {
      font-weight: 700;
    }
  }

  /* Phones and up */
  @media (min-width: 400px) {
    .page-nav {
      justify-content: flex-start;

      &-wrapper {
        display: block;
        padding-right: $space-unit;
        text-align: left;
      }
    }
  }
</style>
