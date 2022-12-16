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
    </>
  );
}
