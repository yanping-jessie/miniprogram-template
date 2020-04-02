import Vue from 'vue';
import Store from '@/store';
import Plugins from '@/plugins';
import App from './App';

Vue.config.productionTip = false;

Vue.prototype.$store = Store;
Vue.use(Plugins);

App.mpType = 'app';

const app = new Vue({
  ...App,
});
app.$mount();
