<template>
  <div class="theme-container" @keyup.esc="toggleDebugPanel()">
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
  </div>
</template>

<script>
import { DateTime } from "luxon";
import filter from "lodash/filter";
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
    height: 100vh;

    .theme-header {
      flex: 1 1 10%;
    }

    .theme-content {
      flex: 10 1 90%;
      position: relative;
      // overflow: auto;
      display: flex;
      flex-direction: column;
    }

    .graphic-wrapper {
      padding: $space-unit / 2;
      flex: 0 2 40%;
    }

    .text-wrapper {
      padding: 0 $space-unit;
      margin-bottom: $space-unit;
      overflow: auto;
      flex: 1 1 60%;
    }
  }

  @media (orientation: landscape) {
    .graphic-wrapper {
      top: 50%;
      transform: translateY(-50%);
    }
  }

  @media (min-width: 500px) and (orientation: landscape) {
    .theme-container {
      .graphic-wrapper {
        position: absolute;
        width: 55%;
        // top: 0;
        left: 0;
      }

      .text-wrapper {
        position: absolute;
        width: 45%;
        right: 0;
        top: $space-unit;
        bottom: $space-unit;
        padding: $space-unit;
      }
    }
  }

  @media (min-width: 750px) and (orientation: landscape) {
    .theme-container {
      .graphic-wrapper {
        width: 67%;
      }

      .text-wrapper {
        width: 33%;
      }
    }
  }

  @media (min-width: 750px) and (orientation: portrait) {
    .theme-container {
      .graphic-wrapper {
        width: 66%;
        margin: 0 auto;
      }
    }
  }

  @media (min-width: 1200px) and (orientation: landscape) {
    .theme-container {
      .graphic-wrapper {
        width: 50%;
      }

      .text-wrapper {
        width: 50%;
      }
    }
  }

  @media (min-width: 2000px) {
    .theme-container {
      .graphic-wrapper {
        width: 25%;
        left: 25%;
      }

      .text-wrapper {
        width: 25%;
        right: 25%;
      }
    }
  }
</style>
