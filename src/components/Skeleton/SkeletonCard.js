import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonCard = () => {
  return (
    <div style={{ margin: "1rem", width: "100%", height: "17rem" }}>
      <SkeletonTheme color="red" highlightColor="white">
        <Skeleton height={180} />
        <div>
          <Skeleton
            circle
            height={40}
            width={40}
            style={{ margin: "0.5rem" }}
          />
          <Skeleton height={40} width="80%" />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonCard;
