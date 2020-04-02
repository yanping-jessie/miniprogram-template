<template>
  <div class="free-live">
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
.free-live {
  padding: 0 15px;
}
</style>
