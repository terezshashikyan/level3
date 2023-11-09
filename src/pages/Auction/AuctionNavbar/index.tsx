import { ArrowLeftBlue, ArrowLeft, ArrowRight } from "../../../assets/icons";

import "./style.scss";

const AuctionNavbar = () => {
  return (
    <div className="AuctionNavbar">
      <div className="AuctionNavbar__path">
        <button className="AuctionNavbar__path_button AuctionNavbar__path_home">
          Home
        </button>
        <button className="AuctionNavbar__path_button AuctionNavbar__path_calendar">
          Auction Calendar
        </button>
        <button className="AuctionNavbar__path_button AuctionNavbar__path_saleList">
        <img className = 'AuctionNavbar__path_saleList_arrow' src={ArrowLeftBlue} alt="arrowLeft" />
        <p>Sale List for Georgia</p>
        </button>
        <button className="AuctionNavbar__path_button AuctionNavbar__path_auctionName">
          2014 - BMW 3er Touring
        </button>
      </div>
    </div>
  );
};

export default AuctionNavbar;
