import React from "react";
import "../Upcoming/upcoming.css";

const Upcoming = () => {
  const [events, setEvents] = React.useState([]);
  const getEvent = async () => {
    const response = await fetch("http://localhost:3001/events", {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setEvents(data.events);
  };
  React.useEffect(() => {
    getEvent();
  }, []);

  console.log(events);
  let eventsToShow = events;

  return (
    <section id="events" className="wow fadeInUp">
      <div className="containerUp">
        <div className="section-header">
          <h2>Upcoming Events</h2>
        </div>
        {eventsToShow.map((event) => {
          return (
            <>
              {/* <div>
                <img className="homeimg" src={event.image}></img>
                <h5 id="event-artist">{event.artist}</h5>
                <h11 id="event-image">{event.eventImage}</h11>
                <h8 id="event-name">{event.name}</h8>
                <h9 id="event-city">{event.city}</h9>
                <h10 id="event-date">{event.date}</h10>
              </div> */}
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="event">
                    <img className="img-fluid" src={event.image} /> 
                    <div className="details">
                      <h3 id="event-name">{event.name}                      </h3>
                      <p>Quas alias incidunt</p>
                      <div className="social">
                        <a href="">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="event">
                  <img className="img-fluid" src={event.image} /> 
                    <div className="details">
                      <h3>
                        <a href="event-details.html">Hubert Hirthe</a>
                      </h3>
                      <p>Consequuntur odio aut</p>
                      <div className="social">
                        <a href="">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="event">
                  <img className="img-fluid" src={event.image} /> 

                    <div className="details">
                      <h3>
                        <a href="event-details.html">Cole Emmerich</a>
                      </h3>
                      <p>Fugiat laborum et</p>
                      <div className="social">
                        <a href="">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="event">
                    <img
                      src="img/events/4.jpg"
                      alt="event 4"
                      className="img-fluid"
                    />
                    <div className="details">
                      <h3>
                        <a href="event-details.html">Jack Christiansen</a>
                      </h3>
                      <p>Debitis iure vero</p>
                      <div className="social">
                        <a href="">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="event">
                    <img
                      src="img/events/5.jpg"
                      alt="event 5"
                      className="img-fluid"
                    />
                    <div className="details">
                      <h3>
                        <a href="event-details.html">Alejandrin Littel</a>
                      </h3>
                      <p>Qui molestiae natus</p>
                      <div className="social">
                        <a href="">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="event">
                    <img
                      src="img/events/6.jpg"
                      alt="event 6"
                      className="img-fluid"
                    />
                    <div className="details">
                      <h3>
                        <a href="event-details.html">Willow Trantow</a>
                      </h3>
                      <p>Non autem dicta</p>
                      <div className="social">
                        <a href="">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="event">
              <img src="event" alt="event 1" className="img-fluid" />
              <div className="details">
                <h3>
                  <a href="event-details.html">Brenden Legros</a>
                </h3>
                <p>Quas alias incidunt</p>
                <div className="social">
                  <a href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="event">
              <img
                src="img/events/2.jpg"
                alt="event 2"
                className="img-fluid"
              />
              <div className="details">
                <h3>
                  <a href="event-details.html">Hubert Hirthe</a>
                </h3>
                <p>Consequuntur odio aut</p>
                <div className="social">
                  <a href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="event">
              <img
                src="img/events/3.jpg"
                alt="event 3"
                className="img-fluid"
              />
              <div className="details">
                <h3>
                  <a href="event-details.html">Cole Emmerich</a>
                </h3>
                <p>Fugiat laborum et</p>
                <div className="social">
                  <a href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="event">
              <img
                src="img/events/4.jpg"
                alt="event 4"
                className="img-fluid"
              />
              <div className="details">
                <h3>
                  <a href="event-details.html">Jack Christiansen</a>
                </h3>
                <p>Debitis iure vero</p>
                <div className="social">
                  <a href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="event">
              <img
                src="img/events/5.jpg"
                alt="event 5"
                className="img-fluid"
              />
              <div className="details">
                <h3>
                  <a href="event-details.html">Alejandrin Littel</a>
                </h3>
                <p>Qui molestiae natus</p>
                <div className="social">
                  <a href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="event">
              <img
                src="img/events/6.jpg"
                alt="event 6"
                className="img-fluid"
              />
              <div className="details">
                <h3>
                  <a href="event-details.html">Willow Trantow</a>
                </h3>
                <p>Non autem dicta</p>
                <div className="social">
                  <a href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
            </>
          );
        })}
       
      </div>
    </section>
  );
};
export default Upcoming;
