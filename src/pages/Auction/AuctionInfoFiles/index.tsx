import { pdf, img } from "../../../assets/icons";

import "./style.scss";

const AuctionInfoFiles = () => (
  <section className="auctionInfoFiles">
    <div className="auctionInfoFiles__header">Files</div>
    <div className="auctionInfoFiles__container">
      <div className="auctionInfoFiles__container_item">
        <p className="auctionInfoFiles__container_item_text">Open</p>
      </div>
      <div className="auctionInfoFiles__container_item">
        <img src={img} alt="icon" />
      </div>
      <div className="auctionInfoFiles__container_item">
        <img src={pdf} alt="pdf" />
      </div>
    </div>
  </section>
);

export default AuctionInfoFiles;
