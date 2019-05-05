<template>
  <div v-if="enabled" class="debug-data">
      <h2>debug-data</h2>
      <h3>$site</h3>
      <code>{{ siteData }}</code>
      <h3>$page</h3>
      <code>{{ pageData }}</code>
    </div>
</template>

<script>
export default {
  name: 'DebugPanel',
  props: {
    enabled: Boolean,
    siteData: Object,
    pageData: Object,
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/vars.scss";

  .debug-data {
    // flip display to "block"
    // to see debug data
    display: block;
    font-family: monospace;
    
    background-color: $debug-bg-color;
    color: $debug-color;
    
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    padding: 50px;
    overflow: auto;

    code {
      display: block;
      white-space: pre;
    }
  }
</style>
