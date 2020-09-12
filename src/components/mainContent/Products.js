import React, { memo } from "react";
import Button from '@material-ui/core/Button';
import ProgressiveImage from "react-progressive-image";

function Products({ num, img, title, head }) {
  return (
    <div className={`products ${num === 2 && "rev"}`}>
      <div className="product__description">
        <div className="heading">
          <h1>
            {head}
          </h1>
          <p>
            {title}
          </p>
          <Button size="large" variant="contained" color="primary">
            Buy
</Button>
        </div>
      </div>

      <div className="product__img">
        <ProgressiveImage src={img} placeholder="gray.png" >

          {(src, loading) => <img style={{ opacity: loading ? 0.5 : 1 }} className="card-image" src={src} alt="an image" />}

        </ProgressiveImage>
      </div>
    </div>
  );
}

export default memo(Products);