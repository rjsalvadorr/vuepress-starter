<template>
  <div class="theme-container" @keyup.esc="toggleDebugPanel">
    <Header :title="$site.title" :desc="$site.description"></Header>
    <div class="content-wrapper">
      <slot>
        <!-- if <Layout> has children, they go here -->
      </slot>
      <Content/>
    </div>
    <Footer></Footer>
    <DebugPanel :enabled="debugPanelEnabled" :siteData="$site" :pageData="$page" ></DebugPanel>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import DebugPanel from "../components/DebugPanel.vue";

export default {
  name: 'Layout',
  data() {
    return {
      debugPanelEnabled: false,
    };
  },
  methods: {
    toggleDebugPanel() {
      this.debugPanelEnabled = !this.debugPanelEnabled;
    },
  },
  components: {
    Header,
    Footer,
    DebugPanel
  }
}
</script>

<style lang="scss">
  /////  GLOBAL STYLES
  @import "../styles/vars.scss";

  body {
    margin: 0;
    padding: 0;
    background-color: $footer-bg-color;
  }

  * {
    font-family: sans-serif;
    box-sizing: border-box;
  }

</style>

<style scoped lang="scss">
  /////  SCOPED NON-GLOBAL STYLES
  @import "../styles/vars.scss";

  .theme-container {
    background-color: $body-bg-color;
    color: $body-color;
  }
  .content-wrapper {
    padding: $space-unit;
  }
</style>
