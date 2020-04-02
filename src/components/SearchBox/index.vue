<template>
  <div class="search-box flex flex-middle" :class="{ 'flex-center': center }" @click="onClick">
    <img src="/static/search.svg" class="search-box__icon flex-none" />
    <input
      v-model.trim="input"
      type="text"
      placeholder="搜索你要查找的课程"
      class="search-box__input"
      :class="{ 'flex-auto': !center }"
      :disabled="readOnly"
    />
    <img v-show="input" src="/static/cancel.svg" class="search-box__icon flex-none" />
  </div>
</template>

<script>
export default {
  props: {
    center: { type: Boolean, default: false },
    readOnly: { type: Boolean, default: false },
  },
  data() {
    return {
      input: '',
    };
  },
  methods: {
    onClick() {
      if (this.readOnly) this.$emit('click');
    },
  },
};
</script>

<style lang="less" scoped>
.search-box {
  height: 34px;
  padding: 0 10px;
  background: #f3f5f7;
  border-radius: 34px;

  &__icon {
    width: 18px;
    height: 18px;
  }

  &__input {
    font-size: 14px;
    color: #303943;
    text-align: left;
    margin: 0 4px;
  }
}
</style>
