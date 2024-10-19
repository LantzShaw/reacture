import React, { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./api";

export type ReactQueryExampleProps = {};

const ReactQueryExample: FC<ReactQueryExampleProps> = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["users"],
    queryFn: ({ signal }) => getUsers({ signal }),
    staleTime: 5 * 1000, // 间隔5秒请求一次
    retry: 10, // 请求失败，在显示错误之前，重试请求10次
    retryDelay: 1000, // 1秒钟后重试
  });

  if (isLoading) return "loading...";

  if (error) return `Something went wrong ${error.message}`;

  return (
    <>
      <div></div>
    </>
  );
};

export default ReactQueryExample;
