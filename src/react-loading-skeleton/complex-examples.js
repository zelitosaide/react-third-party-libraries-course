import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function ComplexExamples() {
  return (
    <div style={{ display: "flex", width: 600, background: "red" }}>
      <div
        style={{
          width: 75,
          background: "green",
          display: "flex",
          marginRight: "1.5rem",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        ola
      </div>
    </div>
  );
}
