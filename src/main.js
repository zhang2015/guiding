// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.devtools = true;

Vue.config.productionTip = false
    // Vue.use(VueResource)
    /* eslint-disable no-new */
Vue.use(VueResource)


//bus //事件总线
//用于跨组件之间事件传递(不是父子组件)
window.eventBus = new Vue();

new Vue({
    el: '#app',
    router,
    VueResource,
    template: '<App/>',
    components: { App }
})