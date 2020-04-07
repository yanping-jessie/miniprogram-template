<template>
  <div class="index">这是首页</div>
</template>

<script>
import { getIndexCourseRecommend } from '@/services/course';

export default {
  mounted() {
    return getIndexCourseRecommend();
  },
};
</script>

<style lang="less" scoped></style>
