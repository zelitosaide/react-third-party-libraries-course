import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
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

      <div style={{ padding: 20 }}>
        <SkeletonTheme
          baseColor="#202020"
          highlightColor="#444"
        >
          <p>
            <Skeleton count={3} />
          </p>
        </SkeletonTheme>
      </div>
      <div style={{ padding: 20 }}>
        <Box />
      </div>
      <div style={{ padding: 20 }}>
        <Box>
          <Skeleton />
        </Box>
      </div>
      <div style={{ padding: 20 }}>
        <Skeleton
          wrapper={Box}
          count={3}
        />
      </div>

      <div style={{ padding: 20 }}>
        <Skeleton
          height={30}
          width={30}
          circle={true}
        />
      </div>
    </>
  );
}

function Box({ children }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        display: "block",
        lineHeight: 2,
        padding: "1rem",
        marginBottom: "0.5rem",
        width: 100,
      }}
    >
      {children}
    </div>
  );
}
