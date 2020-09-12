import React, { memo } from "react";

import ProgressiveImage from "react-progressive-image";
function Cards({ img, title }) {
  return (
    <div className="cardImages">
      <div className="cardImages__inner">
        <ProgressiveImage src={img} placeholder="gray.png">
          {(src, loading) => (
            <img
              style={{ opacity: loading ? 0.5 : 1 }}
              className="card-image"
              src={src}
              alt=""
            />
          )}
        </ProgressiveImage>

        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default memo(Cards);
