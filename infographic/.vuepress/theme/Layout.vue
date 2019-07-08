<template>
  <div class="theme-container" @keyup.esc="toggleDebugPanel()">
    <Header class="theme-header" :title="$site.title" :desc="$site.description"></Header>
    <div class="theme-content">
        <slot>
          <!-- if <Layout> has children, they go here -->
        </slot>
        <div class="graphic-wrapper">
          <SampleSvg></SampleSvg>
        </div>
        <Content class="text-wrapper">
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
import SampleSvg from "../components/SampleSvg.vue";
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
    SampleSvg,
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
    min-height: 100vh;

    .theme-header {
      flex: 1 1 10%;
    }

    .theme-content {
      flex: 10 1 80%;
      padding: $space-unit;
    }

    .theme-footer {
      flex: 1 1 10%;
    }
  }

  @media (min-width: 1200px) {
    .theme-content {
      max-width: 1280px;
      margin: 0 auto;
    }
  }
</style>
