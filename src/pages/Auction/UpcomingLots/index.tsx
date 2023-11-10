import { useState } from "react";
import { LOTS } from "./constants";

import "./style.scss";

const UpcomingLots = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const lotsRenderer = LOTS.map((lot) => (
    <div className="upcomingLots__lot">
      <div className="upcomingLots__lot_img">
        <img src={lot.src} alt="lot" />
        <button className="upcomingLots__lot_img_btn">Next</button>
      </div>
      <div className="upcomingLots__lot_details">
        <span className="upcomingLots__lot_details_name">{lot.name}</span>
        <span className="upcomingLots__lot_details_text">Lot: {lot.lot}</span>
        <span className="upcomingLots__lot_details_text">
          Location: {lot.location}
        </span>
        <span className="upcomingLots__lot_details_text">
          Current Bid: {lot.currentBid}
        </span>
      </div>
    </div>
  ));
  return (
    <section className="upcomingLots">
      <div className="upcomingLots__desktop">{lotsRenderer}</div>
      <div className="upcomingLots__mobileAndTablet">
        <button
          className="upcomingLots__mobileAndTablet__button"
          onClick={toggleOpen}
        >
          Upcoming Lots
        </button>
        {isOpen ? lotsRenderer : null}
      </div>
    </section>
  );
};

export default UpcomingLots;
