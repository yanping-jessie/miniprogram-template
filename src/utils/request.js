import store from '@/store';

async function Request(options) {
  const { method = 'get', header, ...extra } = options;
  if (!['get', 'post'].includes(method)) throw `method ${method} is not supported`;
  const [err, { data } = {}] = await uni.request({
    ...extra,
    method,
    header: Request.mergeHeader(header),
  });
  if (err) throw err.errMsg;
  const { status } = data;
  if (+status === 0 || status === undefined) return data;
  throw data;
}

Request.mergeHeader = function(header = {}) {
  return { ...header, terminalType: 6, token: store.state.auth.token };
};

Request.get = function(options) {
  return request({ ...options, method: 'get' });
};

Request.post = function(options) {
  return request({ ...options, method: 'post' });
};

export default Request;
