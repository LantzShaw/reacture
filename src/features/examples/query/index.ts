
import { QueryClient, useQuery } from "@tanstack/react-query";
import { fetchNews, fetchNewsById } from "./fetchers";

// 参考文章: https://github.com/Ilya-Valasiuk/nextjs-react-query-structure
// 参考项目: https://github.com/ychengcloud/react-vite-admin/tree/main

enum QueryKeys {
  NEWS = "news",
}

export const useNews = () =>
  useQuery({
    queryKey: [QueryKeys.NEWS],
    queryFn: fetchNews,
  });

export const prefetchNews = async (queryClient: QueryClient) =>
  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.NEWS],
    queryFn: fetchNews,
  });

export const useSingleNews = (newsId: string) =>
  useQuery({
    queryKey: [QueryKeys.NEWS, newsId],
    queryFn: () => fetchNewsById(newsId),
  });

export const prefetchSingleNews = async (
  queryClient: QueryClient,
  newsId: string,
) =>
  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.NEWS, newsId],
    queryFn: () => fetchNewsById(newsId),
  });