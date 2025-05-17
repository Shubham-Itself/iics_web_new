import { useState } from "react";
import { Link } from "react-router-dom";
import Count from "../../../common/Count";
import VideoPopup from "../../../modals/VideoPopup";

const HeroHomeTwo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="hero-section hero-2 fix mobile:!pt-0">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1
                  className="wow mobile:!text-[20px] fadeInUp !text-[30px]"
                  data-wow-delay=".3s"
                >
                  WELCOME TO THE <br /> INDIAN INSTITUTE OF{" "}
                  <span className="!text-[#de4141]">CREATIVE</span> SKILLS
                </h1>
                <p
                  className="wow fadeInUp mobile:!text-[12px] !text-[16px]"
                  data-wow-delay=".5s"
                >
                  At IICS, we are redefining the future of creative education in
                  India. As a premier institution dedicated to nurturing talent
                  in the Media & Entertainment industry, IICS empowers the next
                  generation of creators, innovators, and industry leaders. Our
                  cutting-edge curriculum, world-class facilities, and hands-on
                  industry exposure make us the ideal launchpad for aspiring
                  professionals in fields such as film, music, gaming,
                  performing arts, and beyond.
                  <br />
                  Backed by the{" "}
                  <span className="text-sm font-semibold">
                    NSDC Academy
                  </span>{" "}
                  and operated by the{" "}
                  <span className="text-sm font-semibold">
                    Media &amp; Entertainment Skills Council (MESC)
                  </span>
                  , IICS is proudly funded by the{" "}
                  <span className="text-sm font-semibold">
                    National Skill Development Corporation (NSDC)
                  </span>{" "}
                  and functions under the aegis of the{" "}
                  <span className="text-sm font-semibold">
                    Ministry of Skill Development &amp; Entrepreneurship (MSDE)
                  </span>
                  ,{" "}
                  <span className="text-sm font-semibold">
                    Government of India
                  </span>
                  . As a Creative Incubator, IICS ensures the training is
                  industry-relevant, globally competitive, and focused on
                  fostering innovation, entrepreneurship, and IP creation in
                  India's creative economy.
                </p>
                <div className="hero-button">
                  <Link
                    to="/about"
                    className="theme-btn wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    Learn More
                  </Link>
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
                  <img
                    src="/assets/iics_image/about_banner.webp"
                    alt="img"
                    className="wow img-custom-anim-left"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.5s"
                  />
                  <div className="hero-shape">
                    <img
                      src="assets/img/hero/hero-shape.png"
                      alt="img"
                      className="wow img-custom-anim-top"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.2s"
                    />
                  </div>
                  <div className="counter-box float-bob-y">
                    <p>More than</p>
                    <h2>
                      <span className="odometer" data-count="2800">
                        <Count number={100} text="+" />
                      </span>
                    </h2>
                    <p>
                      Creative Career <br /> Pathways
                    </p>
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
