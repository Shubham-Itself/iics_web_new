const AboutArea = () => {
  return (
    <>
      <section className="about-section fix">
        <div className="about-wrapper-5">
          <div className="container !m-0  !max-w-full bg-[#F4F9FF]">
            <div className=" g-4 justify-content-between !px-[40px] py-[40px] mobile:!p-[20px] gap-[30px] ">
              <div className=" flex gap-[50px] mobile:flex-col">
                <div className="section-title mb-0 w-[50%] mobile:w-full">
                  <h6 className="wow fadeInUp">Our Vision</h6>
                  <p
                    className="wow fadeInUp !text-[16px]  text-black mobile:text-start"
                    data-wow-delay=".3s"
                  >
                    To establish India as a global powerhouse in creative talent
                    by nurturing a new generation of skilled professionals,
                    entrepreneurs, and storytellers who lead the Media &
                    Entertainment Industry — both nationally and
                    internationally. <br /> <br />
                    <span className="!font-semibold">
                      We envision IICS as the catalyst that transforms India’s
                      creative potential into a globally recognized force.
                    </span>
                  </p>
                </div>
                <div className="relative md:w-1/2 w-full rounded-xl overflow-hidden">
                  <img
                    src="/assets/iics_image/our_vision.webp"
                    alt="Our Vision"
                    className="w-full h-full object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-black bg-opacity-50" /> */}
                </div>
              </div>
              <div className="flex mt-[100px] ">
                <div className="about-content flex gap-[50px] mobile:flex-col">
                <div className="relative md:w-1/2 w-full rounded-xl overflow-hidden !w-[50%] mobile:!w-full">
                <img
                    src="/assets/iics_image/our_mission.webp"
                    alt="Our Vision"
                    className="w-full h-full object-cover"
                  />
                  
                </div>
                  <div className="section-title mb-0 w-[50%] mobile:w-full">
                    <h6 className="wow fadeInUp">Our Mission</h6>
                    <p
                      className="wow fadeInUp !text-[16px] !font-normal text-black mobile:text-start"
                      data-wow-delay=".3s"
                    >
                      <ul className="list-disc">
                        <li>
                          Empower young creators with future-ready skills
                          through industry-integrated training.
                        </li>
                        <li>
                          Bridge the gap between talent and opportunity by
                          offering hands-on learning & LIVE Projects with
                          real-world exposure.
                        </li>
                        <li>
                          Foster innovation, entrepreneurship, and IP creation
                          to fuel the creative economy.
                        </li>
                        <li>
                          Provide mentorship from award-winning professionals
                          who’ve shaped the industry.
                        </li>
                        <li>
                          Deliver global standards of education while
                          celebrating India’s rich creative heritage.
                        </li>
                        <li>
                          Build a strong talent pipeline that meets the evolving
                          needs of the Media & Entertainment sector.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
