import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const EventGallery = () => {
  return (
   <>
     <section className="live-courses-section section-padding pt-0">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">
                    Event Gallery
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
                            <img src="/assets/iics_image/eventGallery/event_gallery_1.webp" alt="" className='object-fit' />
                              
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                            <img src="/assets/iics_image/eventGallery/event_gallery_2.webp" alt="" className='object-fit' />
                               
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                            <img src="/assets/iics_image/eventGallery/event_gallery_3.webp" alt="" className='object-fit' />
                              
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                            <img src="/assets/iics_image/eventGallery/event_gallery_4.webp" alt="" className='object-fit' />
                                
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                            <img src="/assets/iics_image/eventGallery/event_gallery_5.webp" alt="" className='object-fit' />
                             
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                            <img src="/assets/iics_image/eventGallery/event_gallery_6.webp" alt="" className='object-fit' />
                               
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                            <img src="/assets/iics_image/eventGallery/event_gallery_7.webp" alt="" className='object-fit' />
                              
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                            <img src="/assets/iics_image/eventGallery/event_gallery_8.webp" alt="" className='object-fit' />
                              
                            </div>
                        </SwiperSlide>
                   
                    <div className="swiper-dot text-center pt-5">
                        <div className="dot"></div>
                    </div>
                </Swiper>
            </div>
        </section>
   </>
  )
}

export default EventGallery
