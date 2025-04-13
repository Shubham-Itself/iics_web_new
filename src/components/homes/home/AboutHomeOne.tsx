

 

const AboutHomeOne = () => {
  return (
    <>
      <section className="about-section fix section-padding pt-0 !px-[40px]" >
            <div className="about-wrapper">
                <div className="row g-4 flex gap-[20px]">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="about-image wow img-custom-anim-left !mt-[37px]" data-wow-duration="1.5s" data-wow-delay="0.3s">
                            {/* <img src="assets/img/about/01.jpg" alt="img" /> */}
                            <video src="/assets/iics_video/about2.mp4" autoPlay muted loop playsInline></video>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-6 !w-[64%]">
                        <div className="about-content w-full !max-w-full">
                            <div className="section-title w-full !mb-[5px]">
                                <h6 className="wow fadeInUp">The Future of Creative India Begins Here!</h6>
                                <h2 className="wow fadeInUp leading-[65px] !text-[30px]" data-wow-delay=".3s">
                                   
                                   ABOUT INDIAN INSTITUTE OF <span className="text-[#de4141]">CREATIVE</span> SKILLS
                                </h2>
                            </div>
                            <p className="mt-3 mt-md-0 wow fadeInUp !text-[16px]" data-wow-delay=".5s">
                            The Indian Institute of Creative Skills (IICS) is India’s premier destination for next-gen education in the Media & Entertainment Sector. <br /> <br />

                            Affiliated with the <span className="font-bold">NSDC Academy</span> and operated by the <span className="font-bold">Media & Entertainment Skills Council (MESC, funded by NSDC)</span>, with the support of the Ministry of Skill Development & Entrepreneurship (MSDE). IICS is a pioneering initiative in building India’s creative economy <br /> <br />
                            We are more than an institution— we are a launchpad for entrepreneurs, IP creators, performers, and producers. IICS is here to fuel ambition, sharpen creativity, and put Indian talent on the global map. <br /> <br />
                            <span className="font-bold">IICS is where your passion turns into a profession — and your story begins.</span>
                            </p>
                           
                        </div>
                    </div>
                    {/* <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="about-image-items">
                            <div className="about-image-2 wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                <img src="assets/img/about/03.jpg" alt="img" />
                            </div>
                            <div className="about-image-3 wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                <img src="assets/img/about/02.jpg" alt="img" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    </>
  );
};

export default AboutHomeOne;