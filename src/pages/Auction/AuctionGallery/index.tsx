import { useState } from "react";
import { IMAGES } from "./constants";
import { bmwMobile, bmwTablet, bmwDesktop } from "../../../assets/images";

import "./style.scss";

const AuctionGallery = () => {
  const [limit, setLimit] = useState(4);

  const handleShowMoreImages = () => {
    if (limit <= IMAGES.length) {
      setLimit(limit + 2);
    }
  };

  const handleShowLessImages = () => {
    if (limit <= IMAGES.length) {
      setLimit(limit - 2);
    }
  };

  const imagesRenderer = IMAGES.slice(0, limit).map((image, i, arr) => {
    if (i === arr.length - 1) {
      return (
        <div className="auctionGallery__images_lastImg" key={image.id}>
          <img key={image.id} src={image.src} alt="bmw" />
          <button
            className="auctionGallery__images_loadMoreBtn"
            onClick={
              limit < IMAGES.length
                ? handleShowMoreImages
                : handleShowLessImages
            }
          >
            {limit < IMAGES.length ? (
              <p>+{IMAGES.length - limit} Photos</p>
            ) : (
              <p>Show Less</p>
            )}
          </button>
        </div>
      );
    }
    return <img key={image.id} src={image.src} alt="bmw" />;
  });

  const imagesRendererforMobile = IMAGES.map((image) => <img key={image.id} src={image.src} alt="bmw" />);
  return (
    <section className="auctionGallery">
      <picture className="auctionGallery__mainImg">
        <source media="(max-width:768px)" srcSet={bmwTablet} />
        <source media="(max-width: 321px)" srcSet={bmwMobile} />
        <img className="auctions__gallery-img" src={bmwDesktop} alt="bmw" />
      </picture>
      <div className="auctionGallery__images">{imagesRenderer}</div>
      <div className="auctionGallery__imagesMobile">{imagesRendererforMobile}</div>
    </section>
  );
};

export default AuctionGallery;
