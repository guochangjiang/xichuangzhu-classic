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
  ready: function () {
    // See:
    // http://stackoverflow.com/questions/2346958/how-to-do-a-horizontal-scroll-on-mouse-wheel-scroll
    var mouseWheelEvt = function (event) {
      if (document.body.doScroll) {
          document.body.doScroll(event.wheelDelta > 0 ? "left" : "right");
      } else if ((event.wheelDelta || event.detail) > 0){
        document.body.scrollLeft -= 30;
      } else {
        document.body.scrollLeft += 30;
      }
      return false;
    }
    document.body.addEventListener("mousewheel", mouseWheelEvt);
  },
  components: {
    'index-view': require('./views/index-view.vue'),
    'author-view': require('./views/author-view.vue')
  }
}
</script>

<style lang="less">
@import "./share.less";
@import "../node_modules/normalize.css/normalize.css";
</style>
