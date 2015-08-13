<template>
  <div class="author-view">
    <div class="name">{{author.name}}</div>

    <div class="dynasty">
        〔<a href="#/dynasty/{{author.dynasty_id}}">{{author.dynasty}}</a>〕
    </div>

    <div class="intro" v-html="author.intro"></div>

    <div class="works">
      <div class="work" v-repeat="work in author.works">
        <a class="title" href="#/work/{{work.id}}">
          {{work.title}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: ['params'],
  data: function () {
    return {
      'params': {
        'authorId': null
      },
      'author': {}
    }
  },
  watch: {
    'params.authorId': 'update'
  },
  compiled: function () {
    this.update();
  },
  attached: function () {
    setTimeout(function () {
      window.scrollTo(10000, 0);
    }, 100);
  },
  methods: {
    update: function () {
      this.$http.get('http://www.xichuangzhu.com/api/get_author/' + this.params.authorId, function (data, status, request) {
        this.author = data;
        this.$nextTick(function () {
          window.scrollTo(10000, 0);
        });
      }.bind(this));
    }
  }
}
</script>

<style lang="less" type="text/less">
@import "../fonts";

.author-view {
  .name {
    font-size: 36px;
    line-height: 35px;
    margin-bottom: 12px;
    margin-top: -2px;
    clear: both;
    .font-kai();
  }

  .dynasty {
    margin-left: 14px;
    margin-right: 10px;
    margin-top: -8px;
    font-size: 18px;
    .font-fang-song();
  }

  .intro {
    color: #444;
    /*max-height: 385px;*/
    font-weight: lighter;
    .font-song();
    margin-left: 25px;
  }

  .works {
    height: 100%;
    .work {
      a {
        display: block;
        padding: 0 15px;
        font-size: 20px;
        border-right: 1px solid #e4e4e4;
        .font-fang-song();
        color: #333;
        transition: all .2s ease;

        &:hover {
          background-color: #f6f6f6;
          text-decoration: none;
          color: #428bca;
        }
      }

      &:last-child a {
        border-left: 1px solid #e4e4e4;
      }
    }
  }
}
</style>
