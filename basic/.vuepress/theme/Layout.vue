<template>
  <div class="theme-container" @keyup.esc="toggleDebugPanel()">
    <Header class="theme-header" :title="$site.title" :desc="$site.description"></Header>
    <div class="theme-content">
        <slot>
          <!-- if <Layout> has children, they go here -->
        </slot>
        <Content>
        </Content>
    </div>
    <DebugPanel :enabled="debugPanelEnabled" :siteData="$site" :pageData="$page" ></DebugPanel>
    <Footer class="theme-footer"></Footer>
  </div>
</template>

<script>
import { DateTime } from "luxon";
import filter from "lodash/filter";
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
  @import "../styles/global.scss";
</style>

<style scoped lang="scss">
  /////  SCOPED NON-GLOBAL STYLES
  @import "../styles/vars.scss";

  .theme-container {
    background-color: $body-bg-color;
    color: $body-color;
    display: flex;
    flex-direction: column;

    .theme-content {
      padding: $space-unit;
      flex: 0 1 auto;
    }
  }
</style>
