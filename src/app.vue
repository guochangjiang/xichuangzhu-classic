<template>
  <component is="{{view}}"
      class="view"
      params="{{params}}"
      keep-alive
      v-transition
      transition-mode="out-in">
    </component>
</template>

<script>
module.exports = {
  el: '#app',
  data: {
    view: '',
    params: {
      authorId: null
    }
  },
  components: {
    'index-view': require('./views/index-view.vue'),
    // 'author-view': require('./views/author-view.vue')
  }
}
</script>

<style lang="less">
@import "./share.less";
</style>
