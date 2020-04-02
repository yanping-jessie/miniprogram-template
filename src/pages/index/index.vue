<template>
  <div class="content">
    <div class="search flex flex-middle">
      <span class="flex-auto">我的直播课表</span>
      <search-box center readOnly />
    </div>
    <div class="my-course">
      <swiper indicator-dots>
        <swiper-item v-for="(arr, index) in myCourse" :key="index">
          <div v-for="(item, i) in arr" :key="i" class="my-course__item">{{ index + i }}</div>
        </swiper-item>
      </swiper>
    </div>
    <div class="topics flex flex-wrap">
      <div v-for="(item, index) in topics" :key="index" class="topics__item flex-none">
        <img src="/static/logo.png" class="topics__img" />
        <p class="topics__title">限时秒杀哥哥哥全国</p>
      </div>
    </div>
    <div>
      <block-title
        ><span class="text--gray" @click="toAllLive">查看全部 {{ token }}</span></block-title
      >
      <free-live />
    </div>
    <div>
      <course-list />
    </div>
  </div>
</template>

<script>
import { getIndexCourseRecommend } from '@/services/course';
import SearchBox from '@/components/SearchBox';
import CourseList from '@/components/CourseList';
import BlockTitle from './components/Title';
import FreeLive from './components/FreeLive';

export default {
  components: { SearchBox, CourseList, BlockTitle, FreeLive },
  data() {
    return {
      myCourse: Array.from({ length: 8 }).fill(Array(2)),
      topics: Array.from({ length: 8 }),
    };
  },
  computed: {
    token() {
      return this.$store.state.auth.token || 0;
    },
  },
  mounted() {
    return this.init();
  },
  methods: {
    async init() {
      await getIndexCourseRecommend({
        pageIndex: 1,
        pageSize: 10,
        localCateId: '',
        id: 'fb7c18a6-db1a-b1ef-0c48-bc3995d936ee',
        oldUuid: '',
      });
    },
    toAllLive() {
      this.$store.commit('SET_TOKEN', this.token + 1);
    },
  },
};
</script>

<style lang="less" scoped>
// .content {
//   height: 400upx;
// }

// .logo {
//   height: 200upx;
//   width: 200upx;
//   margin-top: 200upx;
// }

// .title {
//   font-size: 36upx;
//   color: #8f8f94;
// }

.my-course {
  &__item {
    width: 166px;
    height: 100px;
    margin-left: 14px;
    display: inline-block;
    background: pink;
    border-radius: 5px;
  }
}

.topics {
  font-size: 12px;

  &__item {
    max-width: 25%;
    text-align: center;
    padding-top: 5px;
    flex-basis: 20%;
    overflow: hidden;
  }
  &__img {
    width: 39px;
    height: 39px;
  }

  &__title {
    max-width: 100%;
    margin-top: 1px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
