import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function ComplexExamples() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="post">
      <div className="left-col">
        <div className="avatar">
          {loading && (
            <Skeleton
              circle
              height="100%"
              containerClassName="avatar-skeleton"
            />
          )}
          <img
            src="smile.svg"
            alt="A user avatar"
            style={{ display: loading ? "none" : undefined }}
          />
        </div>
        <div className="user-name">
          {loading ? <Skeleton width={70} /> : "John Doe"}
        </div>
      </div>
      <div className="right-col">
        <h3>{loading ? <Skeleton /> : "Use React Loading Skeleton!"}</h3>
        <p className="mb-0">
          {loading ? (
            <Skeleton count={3} />
          ) : (
            <>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nec justo feugiat, auctor nunc ac, volutpat arcu.
              Suspendisse faucibus aliquam ante, sit amet iaculis dolor posuere
              et. In ut placerat leo.
            </>
          )}
        </p>
      </div>
    </div>
  );
}
