<template>
  <div class="post-links" v-if="enabled">
    <div class="post-link-wrapper" v-for="post in posts">
      <a class="post-link" :href="post.path" >
        <img class="post-link__img" src="https://via.placeholder.com/300x300" />
        <div class="post-link__text">
          <h2 class="post-link__title">{{ post.frontmatter.title }}</h2>
          <span class="post-link__subtitle" v-if="post.frontmatter.subtitle">{{ post.frontmatter.subtitle }}</span>
          <span class="post-link__date">{{ post.frontmatter.date }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    enabled: Boolean,
    posts: Array,
  },
}
</script>

<style scoped lang="scss">
  @import "../styles/vars.scss";

  .post-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .post-link-wrapper {
      margin-top: $space-unit;
      flex: 0 0 30%;
    }

    .post-link {
      display: block;
      text-decoration: none;

      &__img {
        float: left;
        display: inline-block;
        width: 33%;
      }

      &__text {
        display: inline-block;
        width: 67%;
        padding-left: $space-unit / 2;
      }

      &__title {
        margin-top: 0;
        margin-bottom: 5px;
      }

      &__subtitle, &__date {
        display: block;
      }
    }
  }
</style>
