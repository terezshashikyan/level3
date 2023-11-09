import {geoBigFlag} from '../../../assets/icons';

import './style.scss';

const AuctionLiveNow = () => (
    <section className='auctionLiveNow'>
     <span className='auctionLiveNow__text'><img src={geoBigFlag} alt="geo flag"/>Live Now</span>
     <div className="auctionLiveNow__participants"><p className="auctionLiveNow__participants_number">106 Participants</p><p className="auctionLiveNow__participants_left">65 Left</p></div>
    </section>
)

export default AuctionLiveNow;