import { plus, minus } from "../../../assets/icons";

import "./style.scss";

const AuctionBid = () => (
  <section className="auctionBid">
    <div className="auctionBid__banner">
      
    </div>
    <div className="auctionBid__amount">
      <img src={minus} alt="" />
      <input className="auctionBid__amount_input" value="$1.800" />
      <img src={plus} alt="" />
    </div>
    <button className="auctionBid__bidNow_btn">Bid</button>
    <div className="auctionBid__buyNow">
      <p className="auctionBid__buyNow_priceTag">$3.400</p>
      <button className="auctionBid__buyNow_btn">Buy it Now</button>
    </div>
  </section>
);

export default AuctionBid;
