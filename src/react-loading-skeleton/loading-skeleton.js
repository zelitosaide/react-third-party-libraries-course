import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function LoadingSkeleton() {
  return (
    <>
      <div style={{ padding: 20 }}>
        <Skeleton />
      </div>
      <div style={{ padding: 20 }}>
        <Skeleton count={5} />
      </div>
      <div style={{ padding: 20 }}>
        <h1>
          <Skeleton />
        </h1>
        <Skeleton count={10} />
      </div>
    </>
  );
}
