<template>
  <div class="course flex">
    <div class="course-thumb flex-none">
      <img src="https://res.shiguangkey.com/file/201811/06/20181106220151200862850.png" class="course-thumb__cover" />
    </div>
    <div class="course-detail flex-auto flex flex-column flex-between">
      <p class="course-detail__title">
        <span class="course-detail__try">可试学</span>
        8600万粉丝幕后操盘手，教的8600万粉丝幕后操盘手，教的
      </p>
      <div class="flex">
        <span class="text--red">￥16000.88</span>
        <span class="text--green">免费</span>
        <span class="course-detail__original text--gray">￥16000.88</span>
        <!-- <span class="course-detail__addition text--gray flex-auto">新出炉好课</span> -->
        <span class="course-detail__addition text--gray flex-auto">1.8w人在学</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.course {
  padding-top: 15px;

  &-thumb {
    width: 110px;
    height: 68px;
    font-size: 12px;
    border-radius: 4px;
    overflow: hidden;

    &__cover {
      width: 100%;
      height: 100%;
    }
  }

  &-detail {
    font-size: 12px;
    margin-left: 10px;

    &__title {
      font-size: 14px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    &__try {
      font-size: 10px;
      color: #35bf10;
      line-height: 15px;
      display: inline-block;
      margin-right: 2px;
      padding: 0 2px;
      background: rgba(53, 191, 16, 0.2);
      border-radius: 2px;
    }

    &__original {
      text-decoration: line-through;
    }

    &__addition {
      text-align: right;
    }
  }
}
</style>
