import Count from "../../common/Count";

const AboutCounter = () => {
  return (
    <>
      <div className="counter-section-23 section-padding">
        <div className="container custom-container">
          <div
            className="relative counter-wrapper-2 bg-cover mobile:!justify-start"
            style={{
              backgroundImage: `url(/assets/iics_image/about/campus_across.webp)`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 z-0"></div>

            {/* Counter content */}
            <div className="relative z-10 flex flex-wrap justify-between w-full">
              <div className="counter-items">
                <div className="content flex flex-col items-center">
                  <h2>
                    <span className="odometer">
                      <Count number={5} text="" />
                    </span>
                  </h2>
                  <p>Campuses Across India</p>
                </div>
              </div>
              <div className="counter-items">
                <div className="content flex flex-col items-center">
                  <h2>
                    <span className="odometer">
                      <Count number={50} text="+" />
                    </span>
                  </h2>
                  <p>Celebrity & Industry Mentors</p>
                </div>
              </div>
              <div className="counter-items">
                <div className="content flex flex-col items-center">
                  <div className="flex gap-[10px]">
                    <h2>
                      <span className="odometer">
                        <Count number={35} text="k" />
                      </span>
                    </h2>
                    <h2>-</h2>
                    <h2>
                      <span className="odometer">
                        <Count number={50} text="k" />
                      </span>
                    </h2>
                  </div>
                  <p>Guaranteed Internship Stipend</p>
                </div>
              </div>
              <div className="counter-items">
                <div className="content flex flex-col items-center">
                  <h2>
                    <span className="odometer">
                      <Count number={100} text="+" />
                    </span>
                  </h2>
                  <p>Creative Career Pathways</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCounter;
