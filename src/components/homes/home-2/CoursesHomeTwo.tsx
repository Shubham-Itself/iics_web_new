
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
 

const CoursesHomeTwo = () => {
  return (
    <>
      <section className="live-courses-section section-padding">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">
                    Testimonials / Industry Speak
                    </h6>
                    {/* <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Unlock Knowledge in Real-Time <br />
                        Enroll in Our Live Courses
                    </h2> */}
                </div>
                <Swiper 
                spaceBetween={30}
                speed={1500}
                loop={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: ".dot",
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                breakpoints={ {
                  1199: {
                      slidesPerView: 3,
                  },
                  991: {
                      slidesPerView: 2,
                  },
                  767: {
                      slidesPerView: 2,
                  },
                  575: {
                      slidesPerView: 1,
                  },
                  0: {
                      slidesPerView: 1,
                  },
              }}
                className="swiper live-courses-slider">
                   
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                                <div className="live-courses-items  bg-cover" style={{background: `url(/assets/img/live-courses/bg-1.jpg)`}}>
                                    <div className="live-courses-content">
                                        {/* <h3>
                                            <span>Ms. Deeksha Toor </span>
                                        
                                        </h3> */}
                                        {/* <div className="icon">
                                            <img src="assets/img/live-courses/figma.png" alt="img" />
                                        </div> */}
                                    </div>
                                    <div className="live-courses-image">
                                        <img src="assets/img/live-courses/01.png" alt="img" />
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/live-courses/client-1.png)`}}></div>
                                    <h4>Ms. Deeksha Toor </h4>
                                   
                                    <p>Renowned Singer & Performer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                                <div className="live-courses-items  bg-cover" style={{background: `url(/assets/img/live-courses/bg-2.jpg)`}}>
                                    <div className="live-courses-content">
                                        {/* <h3>
                                            <span>Basic HTML</span>
                                            to WordPress
                                        </h3> */}
                                        {/* <div className="icon">
                                            <img src="assets/img/live-courses/wp.png" alt="img" />
                                        </div> */}
                                    </div>
                                    <div className="live-courses-image">
                                        <img src="assets/img/live-courses/02.png" alt="img" />
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/live-courses/client-2.png)`}}></div>
                                    <h4>Mr. Keshav Sadhna</h4>
                                   <p>Indian Actor
                                   </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                                <div className="live-courses-items  bg-cover" style={{background: `url(/assets/img/live-courses/bg-3.jpg)`}}>
                                    <div className="live-courses-content">
                                       
                                        {/* <div className="icon">
                                            <img src="assets/img/live-courses/fi.png" alt="img" />
                                        </div> */}
                                    </div>
                                    <div className="live-courses-image">
                                        <img src="assets/img/live-courses/03.png" alt="img" />
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/live-courses/client-3.png)`}}></div>
                                    <h4>Ms. Radha Bhatt </h4>
                                   <p>Indian Actor & Trauma Informed Coach</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                                <div className="live-courses-items  bg-cover" style={{background: `url(/assets/img/live-courses/bg-2.jpg)`}}>
                                    <div className="live-courses-content">
                                      
                                        {/* <div className="icon">
                                            <img src="assets/img/live-courses/wp.png" alt="img" />
                                        </div> */}
                                    </div>
                                    <div className="live-courses-image">
                                        <img src="assets/img/live-courses/02.png" alt="img" />
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/live-courses/client-1.png)`}}></div>
                                    <h4>Mr. Dishu Khanna </h4>
                                    <p>Travel Digital Creator</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                                <div className="live-courses-items  bg-cover" style={{background: `url(/assets/img/live-courses/bg-2.jpg)`}}>
                                    <div className="live-courses-content">
                                      
                                        {/* <div className="icon">
                                            <img src="assets/img/live-courses/wp.png" alt="img" />
                                        </div> */}
                                    </div>
                                    <div className="live-courses-image">
                                        <img src="assets/img/live-courses/02.png" alt="img" />
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/live-courses/client-1.png)`}}></div>
                                    <h4>Mr. Kunal Ahlawat </h4>
                                    <p>Travel Digital Creator</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                                <div className="live-courses-items  bg-cover" style={{background: `url(/assets/img/live-courses/bg-2.jpg)`}}>
                                    <div className="live-courses-content">
                                      
                                        {/* <div className="icon">
                                            <img src="assets/img/live-courses/wp.png" alt="img" />
                                        </div> */}
                                    </div>
                                    <div className="live-courses-image">
                                        <img src="assets/img/live-courses/02.png" alt="img" />
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/live-courses/client-1.png)`}}></div>
                                    <h4>Ms. Shirin Sewani 
                                    </h4>
                                    <p>Indian Actor</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                                <div className="live-courses-items  bg-cover" style={{background: `url(/assets/img/live-courses/bg-2.jpg)`}}>
                                    <div className="live-courses-content">
                                      
                                        {/* <div className="icon">
                                            <img src="assets/img/live-courses/wp.png" alt="img" />
                                        </div> */}
                                    </div>
                                    <div className="live-courses-image">
                                        <img src="assets/img/live-courses/02.png" alt="img" />
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/live-courses/client-1.png)`}}></div>
                                    <h4>Mr. Siddhartha Sharma
                                    </h4>
                                    <p>Indian Actor</p>
                                </div>
                            </div>
                        </SwiperSlide>
                   
                    <div className="swiper-dot text-center pt-5">
                        <div className="dot"></div>
                    </div>
                </Swiper>
            </div>
        </section>
    </>
  );
};

export default CoursesHomeTwo;