import React from "react";
import Loading from "../../../../component/Loading";

const ListingSkeletonGroup = ({ count = 4 }) => {
  return (
    <div className="flex items-center justify-center gap-5 flex-wrap">
      {Array.from({ length: count }).map((_, i) => (
        <Loading key={i} />
      ))}
    </div>
  );
};

export default ListingSkeletonGroup;
