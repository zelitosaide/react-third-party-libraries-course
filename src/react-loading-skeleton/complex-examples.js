import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function ComplexExamples() {
  const [loading, setLoading] = useState(true);

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
        <div
          style={{
            width: 55,
            height: 55,
            background: "#eaeaea",
            borderRadius: "50%",
          }}
        >
          <img
            src="smile.svg"
            alt="A user avatar"
            style={{ display: loading ? "none" : undefined }}
          />
        </div>
      </div>
    </div>
  );
}
