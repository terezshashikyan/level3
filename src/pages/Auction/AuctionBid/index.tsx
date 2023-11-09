import {
  plus,
  minus,
  UAE,
  volume,
  icon,
  uaeSmall,
} from "../../../assets/icons";

import "./style.scss";

const AuctionBid = () => (
  <section className="auctionBid">
    <div className="auctionBid__banner">
      <div className="auctionBid__banner_innerCircle">
        <img src={UAE} alt="uae" />
        <span className="auctionBid__banner_innerCircle_p">UAE</span>
        <span className="auctionBid__banner_innerCircle_priceTag">1700$</span>
        <span className="auctionBid__banner_innerCircle_p">Bid!</span>
      </div>
    </div>
    <div className="auctionBid__amount">
      <input className="auctionBid__amount_input" value="$1.800" />
    </div>
    <button className="auctionBid__bidNow_btn">Bid</button>
    <div className="auctionBid__previousBids">
      <div className="auctionBid__previousBids_header">Previous Bids</div>
      <div className="auctionBid__previousBids_container">
        <div className="auctionBid__previousBids_profile">
          <img src={icon} alt="profileImg" />
          <div className="auctionBid__previousBids_profile_details">
            <span className="auctionBid__previousBids_profile_details_countryName">
              <img src={uaeSmall} alt="uae" />
              UAE
            </span>
            <span className="auctionBid__previousBids_profile_details_priceTag">
              $1700
            </span>
          </div>
        </div>
        <div className="auctionBid__previousBids_profile">
          <img src={icon} alt="profileImg" />
          <div className="auctionBid__previousBids_profile_details">
            <span className="auctionBid__previousBids_profile_details_countryName">
              <img src={uaeSmall} alt="uae" />
              UAE
            </span>
            <span className="auctionBid__previousBids_profile_details_priceTag">
              $1700
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="auctionBid__buyNow">
      <p className="auctionBid__buyNow_priceTag">$3.400</p>
      <button className="auctionBid__buyNow_btn">Buy it Now</button>
    </div>
  </section>
);

export default AuctionBid;
