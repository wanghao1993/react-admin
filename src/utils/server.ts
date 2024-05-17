import { createAlova } from 'alova';
import GlobalFetch from 'alova/GlobalFetch';
import ReactHook from 'alova/react';


function requestIntercept(config) {

}

const alovaInstance = createAlova({
  // 假设我们需要与这个域名的服务器交互
  baseURL: import.meta.env.BASE_URL,

  // ReactHook用于创建ref状态，包括请求状态loading、响应数据data、请求错误对象error等
  statesHook: ReactHook,

  // 请求适配器，这里我们使用fetch请求适配器
  requestAdapter: GlobalFetch(),
  
  // 设置全局的请求拦截器，与axios相似
  beforeRequest: config => requestIntercept(config)

  // 响应拦截器，也与axios类似
  async responsed(response, config) => {
    const json = await response.json();
    if (json.code !== 200) {
      // 这边抛出错误时，将会进入请求失败拦截器内
      throw new Error(json.message);
    }
    return json.data;
  },
});
