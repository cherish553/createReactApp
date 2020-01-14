import http from 'plugin/axios/index';

interface getCategory {
  page: number;
  size: number;
  name: string;
}

export default {
  // 获取文章分类
  postCategoryList: ({ page, size, ...rest }: getCategory) => http.post(`/category/list/${page}/${size}`, {
    ...rest,
  }),
};
