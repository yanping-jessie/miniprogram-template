export default {
  install(Vue) {
    Vue.config.errorHandler = function(err) {
      const msg = (err && err.msg) || '加载失败，请查看您网络情况';
      Vue.prototype.$toast(msg);
    };
  },
};
