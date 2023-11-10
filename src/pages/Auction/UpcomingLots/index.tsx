import { LOTS } from "./constants";

const UpcomingLots = () => {
    const lotsRenderer = LOTS.map((lot) => (
     <div className="upcomingLots__lot">
       <img className="upcomingLots__lot_img" src={lot.src} alt="lot" />
       <div className="upcomingLots__lot_details">
        <span className="upcomingLots__lot_details_name">{lot.name}</span>
        <span className="upcomingLots__lot_details_text">Lot:{lot.lot}</span>
        <span className="upcomingLots__lot_details_text">Lot:{lot.lot}</span>
       </div>
     </div>
    ))
   return (
     <section className = 'upcomingLots'>
     </section>
   )
}

export default UpcomingLots;
