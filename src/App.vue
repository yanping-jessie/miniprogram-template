<script>
export default {
  onLaunch: function() {
    console.log('App Launch');
  },
  onShow: function() {
    console.log('App Show');
  },
  onHide: function() {
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
