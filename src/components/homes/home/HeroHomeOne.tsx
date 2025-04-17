

 

const HeroHomeOne = () => {
    const registrationInfo = [
        {
            date:'1st April 2025',
            procees : 'Important Dates'
        },
        {
            date:'15th April 2025',
            procees : 'Upcoming Event'
        },
        {
            date:'19th April 2025',
            procees : 'School'
          
        },
        // {
        //     date:'15th May 2025',
        //     procees : 'Batch Start Date'
        // },
    ]
  return (
    <>
        <section className=" fix relative pb-[96px]">
            <img src="assets/iics_image/main_iics_banner.webp" alt="banner_imahe" className="w-[100%]" />
            <div className="absolute bottom-[47px] left-0 w-[50%] bg-white shadow-custom rounded-[20px] left-1/2 -translate-x-1/2 flex justify-between p-[20px]">
            {
                registrationInfo.map((items , index)=>(
                    <div key={index} className="flex flex-col gap-[5px]">
                        <p className="text-[22px] font-bold text-black">{items.date}</p>
                        <p className="text-[15px] text-black">{items.procees}</p>
                    </div>
                ))
            }
            </div>
            {/* <div className="shape-left">
                <img src="assets/img/hero/shape-left.png" alt="img" />
            </div> */}
            {/* <div className="shape-right">
                <img src="assets/img/hero/shape-right.png" alt="img" />
            </div> */}
            {/* <div className="dot-shape float-bob-x">
                <img src="assets/img/hero/dot.png" alt="img" />
            </div> */}
            {/* <div className="vector-shape float-bob-y">
                <img src="assets/img/hero/vectoe.png" alt="img" />
            </div> */}
            {/* <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-content">
                            <span className="wow fadeInUp">Welcome to Eduspace</span>
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                Interactive Learning
                                Engaging Students in
                                the Digital Age
                            </h1>
                            <h3 className="wow fadeInUp" data-wow-delay=".5s">Get  2800+ Best Quality Online Courses From Eduspace</h3>
                            <div className="hero-button wow fadeInUp" data-wow-delay=".7s">
                                <Link to="/courses-details" className="theme-btn hover-white">Find Your Best Courses</Link>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="assets/img/hero/hero-1.jpg" alt="img" className="img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s" />
                        <div className="counter-box float-bob-x">
                            <p>More then</p>
                            <h2><span className="odometer" data-count="2800">
                              <Count number={2800} text='+' />
                              </span></h2>
                            <p>Quality Courses</p>
                        </div>
                        <div className="rating-box float-bob-y">
                            <div className="content">
                                <h2><span className="odometer" data-count="4.8">
                                  <Count number={4} text=".8k" />
                                  </span></h2>
                                <p>5820+ Reviews</p>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <img src="assets/img/hero/trustpilot-logopng.png" alt="img" />
                        </div>
                        <div className="circle-img float-bob-y"> 
                            <img src="assets/img/hero/circle.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    </>
  );
};

export default HeroHomeOne;