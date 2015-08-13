var Vue = require('vue');
var Router = require('director').Router;
var app = new Vue(require('./app.vue'));
var router = new Router();

Vue.use(require('vue-resource'));

router.on('/', function () {
  window.scrollTo(0, 0);
  app.view = "index-view";
});

router.on('/author/:authorId', function (authorId) {
  window.scrollTo(0, 0);
  app.view = "author-view";
  app.params.authorId = authorId;
})

router.configure({
  notfound: function () {
    router.setRoute('/');
  }
});

router.init('/')
