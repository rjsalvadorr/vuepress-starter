<template>
  <div class="debug-data">
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
    padding: $space-unit;
    height: 300px;
    overflow: auto;

    code {
      display: block;
      white-space: pre;
    }
  }
</style>
