var Vue = require('vue');
var Router = require('director').Router;
var app = new Vue(require('./app.vue'));
var router = new Router();

Vue.use(require('vue-resource'));
Vue.config.debug = false;

router.on('/', function () {
  app.view = "index-view";
});

router.on('/author/:authorId', function (authorId) {
  app.view = "author-view";
  app.params.authorId = authorId;
})

router.configure({
  notfound: function () {
    router.setRoute('/');
  }
});

router.init('/')
