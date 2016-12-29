const Vue = require('vue');
const VueRouter = require('vue-router');
const Index = require('./index.vue');
Vue.use(VueRouter);
const router = new VueRouter(require('./router'));
new Vue({
    el: '#app',
    router: router,
    render: h => h(Index)
});