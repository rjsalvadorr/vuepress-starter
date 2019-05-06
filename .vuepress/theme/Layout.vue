<template>
  <div class="theme-container" @keyup.esc="toggleDebugPanel()">
    <Header :title="$site.title" :desc="$site.description"></Header>
    <div :class="getContentClasses($page)">
      <slot>
        <!-- if <Layout> has children, they go here -->
      </slot>
      <Content/>
      <PostList :enabled="isCategoryPage($page)" :posts="filterPostsByCategory($site.pages, $page.frontmatter.category)"></PostList>
    </div>
    <Footer></Footer>
    <DebugPanel :enabled="debugPanelEnabled" :siteData="$site" :pageData="$page" ></DebugPanel>
  </div>
</template>

<script>
import filter from "lodash/filter";

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import PostList from "../components/PostList.vue";
import DebugPanel from "../components/DebugPanel.vue";

export default {
  name: 'Layout',
  data() {
    return {
      debugPanelEnabled: false,
    };
  },
  methods: {
    getContentClasses(pageData) {
      let classes = 'content-wrapper';
      if(pageData.frontmatter.type === "post") {
        classes += ' content-wrapper--post';
      }
      else if(pageData.frontmatter.type === "category") {
        classes += ' content-wrapper--category';
      }
      return classes;
    },
    toggleDebugPanel() {
      this.debugPanelEnabled = !this.debugPanelEnabled;
    },
    isCategoryPage(pageData) {
      return pageData.frontmatter.type === 'category';
    },
    filterPostsByCategory(allPages, category) {
      console.log(allPages, category);
      return filter(allPages, (page) => {
        const isPost = page.frontmatter.type === "post";
        const isCorrectCategory = page.frontmatter.category === category;
        return isPost && isCorrectCategory;
      });
    },
  },
  components: {
    Header,
    Footer,
    PostList,
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
    box-sizing: border-box;
  }

  div, span, p, a, li, ol, ul, {
    font-family: sans-serif;
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
    min-height: 75vh;
    max-width: 960px;
    margin: 0 auto;

    &--post {
      max-width: 960px;
    }
  }
</style>
