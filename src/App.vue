<script>
export default {
  onLaunch: function () {
    console.log('App Launch');

    // #ifndef H5
    const updateManager = uni.getUpdateManager();
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log(res.hasUpdate);
    });
    updateManager.onUpdateReady(function (res) {
      uni.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate();
          }
        },
      });
    });
    // #endif
  },
  onShow: function () {
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  },
};
</script>

<style lang="less">
/*每个页面公共css */
@import url(./common/flex.less);
@import url(./common/common.less);

page {
  font-size: 14px;
  color: #303943;
}
</style>
