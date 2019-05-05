<template>
  <div class="theme-container">
    <Header :title="$site.title" :desc="$site.description"></Header>
    <div class="content-wrapper">
      <slot>
        <!-- if <Layout> has children, they go here -->
      </slot>
      <Content/>
    </div>
    <DebugPanel :siteData="$site" :pageData="$page" ></DebugPanel>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import DebugPanel from "../components/DebugPanel.vue";

export default {
  name: 'Layout',
  computed: {
    getDebugData: () => {
      // console.log(this.$site);
      return JSON.stringify(`${this}`, null, 2);
    }
  },
  components: {
    Header,
    DebugPanel
  }
}
</script>

<style>
  @import "../styles/global.scss";
</style>

<style scoped lang="scss">
  @import "../styles/vars.scss";

  .theme-container {
    background-color: $body-bg-color;
    color: $body-color;
  }
  .content-wrapper {
    margin: $space-unit;
  }
</style>
