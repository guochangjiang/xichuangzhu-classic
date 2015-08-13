<template>
  <div class="index-view" v-transition="fade" v-show="show">
    <div class="title">{{work.title}}</div>

   <div class="author">
       〔<a href="#/dynasty/{{work.dynasty_id}}">{{work.dynasty}}</a>〕
       <a href="#/author/{{work.author_id}}">{{work.author}}</a>
   </div>

   <div class="content" v-html="work.content"></div>

   <template v-if="work.intro">
     <div class="divider"></div>
     <div class="intro" v-html="work.intro"></div>
   </template>

   <div class="logo">
       <img src="http://www.xichuangzhu.com/static/img/favicon.png" alt="">
   </div>
 </div>
</template>

<script>
module.exports = {
  props: ['params'],
  data: function () {
    return {
      params: {},
      work: {},
      show: false
    };
  },
  compiled: function () {
    this.update();
  },
  attached: function () {
    this.show = true;
    window.addEventListener('keyup', this.switch);
    setTimeout(function () {
      window.scrollTo(10000, 0);
    }, 100);
  },
  detached: function () {
    this.show = false;
    window.removeEventListener('keyup', this.switch);
  },
  methods: {
    update: function () {
      this.show = false;
      setTimeout(function () {
        this.$http.get('http://www.xichuangzhu.com/api/get_random_work', function (data, status, request) {
          this.work = data;
          this.show = true;
          this.$nextTick(function () {
            window.scrollTo(10000, 0);
          });
        }.bind(this));
      }.bind(this), 300);
    },
    switch: function (e) {
      if (e.keyCode === 32) {
        this.update();
      }
    }
  }
}
</script>

<style lang="less">
@import "../fonts";

.index-view {
  .title {
    font-size: 36px;
    line-height: 35px;
    margin-bottom: 12px;
    margin-top: -2px;
    clear: both;
    .font-kai();
  }

  .author {
    margin-left: 14px;
    margin-right: 10px;
    margin-top: -8px;
    font-size: 18px;
    .font-fang-song();
  }

  .content {
    font-size: 24px;
    line-height: 1.4;
    letter-spacing: 1px;
    .font-fang-song();
    margin-left: 20px;

    p {
      margin: 0 0 0 5px;
    }
  }

  .divider {
    height: 100px;
    width: 1px;
    margin: 0 50px 0 10px;
    background-color: #aaa;
  }

  .intro {
    color: #444;
    max-height: 385px;
    font-weight: 300;
    .font-song();

    p {
      margin: 0 0 0 10px;
    }
  }

  .logo {
    img {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
