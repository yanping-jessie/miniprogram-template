<template>
  <div class="course-list">
    <item v-for="(item, index) in 6" :key="index" />
  </div>
</template>

<script>
import Item from './Item';

export default {
  components: { Item },
};
</script>

<style lang="less" scoped>
.course-list {
  padding: 0 15px;
}
</style>
