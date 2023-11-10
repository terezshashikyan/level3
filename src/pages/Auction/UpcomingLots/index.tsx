import { useState } from "react";
import { LOTS } from "./constants";

import './style.scss';

const UpcomingLots = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const lotsRenderer = LOTS.map((lot) => (
     <div className="upcomingLots__lot">
       <img className="upcomingLots__lot_img" src={lot.src} alt="lot" />
       <div className="upcomingLots__lot_details">
        <span className="upcomingLots__lot_details_name">{lot.name}</span>
        <span className="upcomingLots__lot_details_text">Lot: {lot.lot}</span>
        <span className="upcomingLots__lot_details_text">Lot: {lot.lot}</span>
       </div>
     </div>
    ))
   return (
     <section className = 'upcomingLots'>
        <div className="upComingLots__desktop">
        {lotsRenderer}
        </div>
        <div className="upComingLots__mobileAndTablet">
        <button className="upcomingLots__mobileAndTablet__button" onClick={toggleOpen}>
            Upcoming Lots
        </button>
        {isOpen?lotsRenderer:null}
        </div>
     </section>
   )
}

export default UpcomingLots;
