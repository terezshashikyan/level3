import AuctionNavbar from "./AuctionNavbar";
import AuctionHeader from "./AuctionHeader";
import AuctionInfoMain from "./AuctionInfoMain";
import AuctionBid from "./AuctionBid";
import AuctionInfoFiles from "./AuctionInfoFiles";
import AuctionGallery from "./AuctionGallery";
import AuctionLiveNow from "./AuctionLiveNow";

import './style.scss';

const Auction = () => (
    <section className="auction container">
      <AuctionNavbar/>
      <AuctionLiveNow/>
      <AuctionHeader/>
      <div className="auction__main">
      <AuctionGallery/>
      <div className="auction__info">
      <AuctionInfoMain/>
      <AuctionBid/>
      <AuctionInfoFiles/>
      </div>
      </div>
    </section>
)

export default Auction;