import request from '@/utils/request';
import { DOMAINS } from '@/utils/config';

const OPEN = `${DOMAINS.OPEN}/api`;

const indexCourseRecommend = `${OPEN}/udb/user/mine`;

export function getIndexCourseRecommend(data) {
  return request({
    url: indexCourseRecommend,
    method: 'get',
    data,
  });
}
