import { Suspense } from "react";

import Loading from "./Loading";
import ErrorBoundary from "./ErrorBoundary";

// NOTE: 这里的component 类型
// component: ReturnType<typeof lazy>

const LazyLoad = ({ component }) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>{component}</Suspense>
    </ErrorBoundary>
  );
};

export default LazyLoad;
