// 分类Api接口
import requests from '@/utils/request'
import type { Result } from './type'

// 获取全部分类数据
export function reqGetCategory(): Promise<Result> {
  return requests({
    method: 'get',
    url: '/home/category/head'
  })
}
