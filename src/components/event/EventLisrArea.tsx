import { Link } from "react-router-dom";


 

const EventLisrArea = () => {

  const events = [
    {
        dateDay:'18',
        dateMonthYear:'April 2025',
        name:'Careers in Game',
        officeLocation:'Lakshya Ingame Academy',
        placeLocation:'Lajpat Nagar, Delhi',
        time:'03:00 PM',

    },
    {
        dateDay:'25',
        dateMonthYear:'April 2025',
        name:'AI Game Jam',
        officeLocation:'Nilee Games',
        placeLocation:'Lajpat Nagar, Delhi',
        time:'09:00 AM',
        
    },
    {
        dateDay:'26',
        dateMonthYear:'April 2025',
        name:'AI Game Jam',
        officeLocation:'Nilee Games',
        placeLocation:'Lajpat Nagar, Delhi',
        time:'09:00 AM',
        
    },
  ]

  return (
    <>
        <section className="event-list-section fix section-padding pt-0">
            <div className="container">
                <div className="event-list-wrapper">
                    {/* <div className="event-list-top-area">
                        <div className="search-widget">
                            <input type="text" placeholder="Find event" />
                            <div className="sub-icon"><i className="fal fa-search"></i></div>
                        </div>
                        <div className="form-clt"> 

                            <NiceSelect
                          className="category"
                          options={[
                            { value: "01", text: "Event Location" },
                            { value: "02", text: "Finland" },
                            { value: "03", text: "India" },
                            { value: "04", text: "Japan" }, 
                            { value: "05", text: "Denmark" }, 
                          ]}
                          defaultCurrent={0}
                          onChange={selectHandler}
                          name=""
                          placeholder="" />
                        </div>
                        <div className="form-clt"> 

                            <NiceSelect
                          className="category"
                          options={[
                            { value: "01", text: "Category" },
                            { value: "02", text: "Category 02" },
                            { value: "03", text: "Category 03" },
                            { value: "04", text: "Category 04" }, 
                            { value: "05", text: "Category 05" }, 
                          ]}
                          defaultCurrent={0}
                          onChange={selectHandler}
                          name=""
                          placeholder="" />
                        </div>
                        <div className="event-button-top">
                            <button type="submit" className="theme-btn">Find Event</button>
                        </div>
                    </div> */}
                    <div className="my-[60px]">
                    <p className="text-[35px] font-bold text-black mb-[30px]">Indian Institute of Creative Skills</p>
                    <div className="section-title !mb-0 ">
                    <h6 className="wow fadeInUp !mb-0">Upcoming Events</h6>
                   
                </div>
                    </div>
                    {
                        events.map((event)=>(
                            <div className="event-list-items">
                            <div className="event-content">
                                <div className="content">
                                    <div className="date !px-[6px]">
                                        <h2>{event.dateDay}</h2>
                                        <span>{event.dateMonthYear}</span>
                                    </div>
                                    <div className="title-text">
                                        <h4><Link to="/event-details">{event.name}</Link></h4>
                                        <ul className="post-time">
                                            <li><i className="far fa-map-marker-alt"></i>{event.officeLocation}</li>
                                            <li><i className="far fa-map-marker-alt"></i>{event.placeLocation}</li>
                                            <li><i className="far fa-clock"></i>{event.time}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="event-image">
                                <img src="assets/img/event/list/01.jpg" alt="img" />
                            </div>
                            <div className="event-btn"> 
                                <Link to="/event-details" className="theme-btn">
                                   Register Now
                                </Link>
                            </div>
                        </div>
                        ))
                    }
                   
                   
                    {/* <div className="event-button">
                        <Link to="/event-details" className="theme-btn">View All Events</Link>
                    </div> */}
                </div>
            </div>
        </section>
    </>
  );
};

export default EventLisrArea;