<template>
  <div :class="`theme-container theme-container--${viewportType}`" @keyup.esc="toggleDebugPanel()">
    <Header :title="$site.title" :desc="$site.description" :viewportType="viewportType"></Header>
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
import { DateTime } from "luxon";
import filter from "lodash/filter";
import debounce from "lodash/debounce";

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import PostList from "../components/PostList.vue";
import DebugPanel from "../components/DebugPanel.vue";

export default {
  name: 'Layout',
  data() {
    return {
      debugPanelEnabled: false,
      viewportType: 'phone',
    };
  },
  mounted() {
    this.setViewportType(window.innerWidth);

    const debouncedFunc = debounce(this.resizeHandler, 300);
    window.addEventListener("resize", debouncedFunc);
  },
  beforeDestroy() {
    const debouncedFunc = debounce(this.resizeHandler, 300);
    window.removeEventListener("resize", debouncedFunc);
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
    resizeHandler(e) {
      const viewportWidth = e.target.innerWidth;
      this.setViewportType(viewportWidth);
    },
    setViewportType(viewportWidth) {
      if(viewportWidth > 1200) {
        this.viewportType = 'desktop-lg';
      }
      else if(viewportWidth > 1000) {
        this.viewportType = 'desktop-md';
      }
      else if(viewportWidth > 750) {
        this.viewportType = 'desktop';
      }
      else if(viewportWidth > 550) {
        this.viewportType = 'tablet';
      }
      else if(viewportWidth > 400) {
        this.viewportType = 'phablet';
      }
      else {
        this.viewportType = 'phone';
      }
    },
    filterPostsByCategory(allPages, category) {
      // Filtering by category
      const filteredPosts = filter(allPages, (page) => {
        const isPost = page.frontmatter.type === "post";
        const isCorrectCategory = page.frontmatter.category === category;
        return isPost && isCorrectCategory;
      });

      // Sorting by reverse chronological order (newest first)
      return filteredPosts.sort((post1, post2) => {
        const dt1 = DateTime.fromISO(post1.frontmatter.date).toUTC();
        const dt2 = DateTime.fromISO(post2.frontmatter.date).toUTC();

        // post1 was written after post2
        if(dt1 > dt2) {
          return -1;
        } else if(dt1 < dt2) {
          return 1
        }
        // dt1 === dt2
        return 0;
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
  @import "../styles/global.scss";
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
