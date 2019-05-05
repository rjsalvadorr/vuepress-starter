<template>
  <div class="theme-container">
    <h1 class="page-title">{{ $site.title }}</h1>
    <span class="page-desc">{{ $site.description }}</span>

    <nav class="page-nav">
      <li v-for="navLink in $site.themeConfig.nav">
        <a :href="navLink.link">{{ navLink.text }}</a>
      </li>
    </nav>

    <slot></slot>
    <Content/>

    <div class="debug-data">
      <h2>debug-data</h2>
      <h3>$site</h3>
      <code>{{ $site }}</code>
      <h3>$page</h3>
      <code>{{ $page }}</code>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Layout',
  computed: {
    getDebugData: () => {
      // console.log(this.$site);
      return JSON.stringify(`${this}`, null, 2);
    }
  }
}
</script>

<style scoped lang="scss">
  .theme-container {
    background-color: #00ff00;
  }
  .debug-data {
    // flip display to "block"
    // to see debug data
    display: block;
    font-family: monospace;
    background-color: #222;
    color: #ddd;
    padding: 20px;
    height: 300px;
    overflow: auto;

    code {
      display: block;
      white-space: pre;
    }
  }
</style>
