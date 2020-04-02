<template>
  <div class="item flex flex-middle">
    <div class="item__time">
      <p class="item__date">12月31日</p>
      20:30
    </div>
    <div class="item__detail flex-auto flex flex-middle">
      <div class="item__img flex-none">
        <img
          src="https://res.shiguangkey.com/file/201811/06/20181106220151200862850.png?x-oss-process=image/resize,l_4096/quality,Q_50/format,jpg"
        />
      </div>
      <span class="item__title ellipsis flex-auto">萌妹子带你轻松学日语</span>
      <span class="item__desc flex-none">9999 人在线</span>
      <img src="/static/enter.svg" class="item__enter" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.item {
  font-size: 14px;
  color: #303943;
  padding-top: 15px;

  &--active {
    color: #3073f4;
  }

  &__time {
    width: 50px;
    text-align: right;
    white-space: nowrap;
  }

  &__date {
    font-size: 10px;
    color: #a1a1a3;
  }

  &__detail {
    height: 44px;
    padding: 0 8px;
    margin-left: 7px;
    background: linear-gradient(90deg, #f3f5f7 0%, #eaebec 100%);
    border-radius: 25px;
  }

  &__title {
    margin: 0 15px;
  }

  &__img {
    position: relative;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    overflow: hidden;

    > img {
      width: 100%;
      height: 100%;
    }
  }

  &__desc {
    font-size: 12px;
  }

  &__enter {
    width: 12px;
    height: 12px;
    margin-left: 2px;
  }
}
.item--active > .item__detail {
  background: linear-gradient(90deg, #f6f8ff 0%, #e0e8ff 100%);
}
</style>
