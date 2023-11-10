import AuctionBid from "./AuctionBid";
import UpcomingLots from "./UpcomingLots";
import AuctionNavbar from "./AuctionNavbar";
import AuctionHeader from "./AuctionHeader";
import AuctionGallery from "./AuctionGallery";
import AuctionLiveNow from "./AuctionLiveNow";
import AuctionInfoMain from "./AuctionInfoMain";
import AuctionInfoFiles from "./AuctionInfoFiles";

import "./style.scss";

const Auction = () => (
  <section className="auction container">
    <AuctionNavbar />
    <AuctionLiveNow />
    <AuctionHeader />
    <div className="auction__main">
      <AuctionGallery />
      <div className="auction__info">
        <div className="auction__info_block1">
          <AuctionInfoMain />
          <AuctionBid />
        </div>
        <AuctionInfoFiles />
      </div>
      <UpcomingLots />
    </div>
  </section>
);

export default Auction;
