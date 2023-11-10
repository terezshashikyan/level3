import "./style.scss";

const AuctionHeader = () => (
  <section className="auctionHeader">
    <div className="auctionHeader__lot">
      <span className="auctionHeader__lot_title">Lot: </span>
      <span className="auctionHeader__lot_number">12345678</span>
    </div>
    <h1 className="auctionHeader__h1">2014 - BMW 3er Touring</h1>
    <span className="auctionHeader__upcomingLots">Upcoming Lots</span>
  </section>
);

export default AuctionHeader;
