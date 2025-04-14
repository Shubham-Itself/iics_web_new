import { useState } from "react";
import { Link } from "react-router-dom";
import Count from "../../../common/Count";
import VideoPopup from "../../../modals/VideoPopup";

 


const HeroHomeTwo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
       <section className="hero-section hero-2 fix">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <h1 className="wow fadeInUp !text-[30px]" data-wow-delay=".3s">
                            WELCOME TO THE INDIAN INSTITUTE OF {" "} 
                                 <span>CREATIVE SKILLS<img src="assets/img/hero/bar-shape-2.png" alt="shape-img" /></span>
                            </h1>
                            <p className="wow fadeInUp !text-[16px]" data-wow-delay=".5s">
                            The Indian Institute of Creative Skills (IICS), an institution affiliated with NSDC Academy and operated by the Media & Entertainment Skills Council (MESC), funded by NSDC, functions under the aegis of the Ministry of Skill Development & Entrepreneurship (MSDE). We are a premier institution dedicated to shaping the next generation of creators, leaders, and entrepreneurs in the Media & Entertainment Industry. <br /> <br />
                               <span className="font-bold">- </span> Industry-Driven Training with World-Class Facilities to equip you with real-world skills. <br />
                               <span className="font-bold">- </span> Learn from Celebs, Oscar Award Winners and Industry Icons who bring decades of experience to the classroom. <br />
                               <span className="font-bold">- </span> Fostering Entrepreneurship & IP Creation to position India as a global leader in Media & Entertainment. <br /> <br />
                               <span className="font-bold text-black">Driven by Industry. Built for Creators. Backed by Legends.</span>

                            </p>
                            <div className="hero-button">
                                <Link to="/courses" className="theme-btn wow fadeInUp" data-wow-delay=".3s">Learn More</Link>
                                {/* <span className="button-text wow fadeInUp" data-wow-delay=".5s">
                                    <a  onClick={() => setIsVideoOpen(true)}
                                        style={{ cursor: "pointer" }} 
                                        className="video-btn video-popup">
                                        <i className="fas fa-play"></i>
                                    </a>
                                    <span className="ms-3 d-line">Play Video</span>
                                </span> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-image-items">
                            <div className="hero-image">
                                <img src="assets/img/hero/hero-2.png" alt="img" className="wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.5s" />
                                <div className="hero-shape">
                                    <img src="assets/img/hero/hero-shape.png" alt="img" className="wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.2s" />
                                </div>
                                <div className="counter-box float-bob-y">
                                    <p>More then</p>
                                    <h2><span className="odometer" data-count="2800">
                                        <Count number={100} text='+' />
                                        </span></h2>
                                    <p>Creative Career <br /> Pathways</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Ml4XCF-JS0k"}
      />
      {/* video modal end */}
    </>
  );
};

export default HeroHomeTwo;