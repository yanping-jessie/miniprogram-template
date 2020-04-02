import request from '@/utils/request';

const OPEN = 'https://open-test.shiguangkey.com/api';

const indexCourseRecommend = `${OPEN}/udb/user/mine`;

export function getIndexCourseRecommend(data) {
  return request({
    url: indexCourseRecommend,
    method: 'get',
    data,
  });
}
