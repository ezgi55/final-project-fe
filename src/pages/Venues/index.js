import React from "react";
import "../../assets/css/style.css";

const Venues = () => {
  const [venues, setvenues] = React.useState([]);
  const getVenue = async () => {
    const response = await fetch("http://localhost:3001/venues", {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    setvenues(data.venues);
  };
  React.useEffect(() => {
    getVenue();
  }, []);

  console.log(venues);
  let venuesToShow = venues;

  return (
    <>
      <div className="containervenue">
        <div id="venue-page-content">
          <h11 className="where2go">WHERE TO GO?</h11>
          <div>
            {venuesToShow.map((venue) => {
              return (
                <>
                  <div>
                    {/*<img className="homeimg" src={event.image}></img>*/}
                    <h12 className="venue-name">{venue.name}</h12>
                    <h13 className="venue-type">{venue.type}</h13>
                    <h14 className="venue-number">{venue.phone_number}</h14>
                    <h15 className="venue-adress">{venue.address}</h15>
                    <h16 className="venue-date">{venue.date}</h16>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Venues;