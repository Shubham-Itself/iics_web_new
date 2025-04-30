import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const videoLinks = [
  { id: 'i_N6o6O73OM', title: 'Deeksha Toor' ,designation:'ndian Singer & Digital Creator' },
  { id: 'XpMuYy_EMSs', title: 'Keshav Sadhna',designation:'Actor, Fashion & Lifestyle Digital Creator' },
  { id: 'dSjYInJeTyQ', title: 'Shirin Sewani',designation:'Indian Actor' },
  { id: 'uL_pI5H5mvo', title: 'Radha Bhatt',designation:'Actress & Trauma Informed Coach' },
  { id: 'VWl5G8CFqNY', title: 'Siddhartha Sharma',designation:'Indian Actor, Acting Mentor & Filmmaker' },
];

const CoursesHomeTwo = () => {
  return (
    <>
      <section className="live-courses-section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="wow fadeInUp">Industry Speak</h6>
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
            breakpoints={{
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
            className="swiper live-courses-slider"
          >
            {videoLinks.map((video) => (
              <SwiperSlide key={video.id} className="swiper-slide">
                <div className="live-courses-main-items">
                  <div className="live-courses-items bg-cover" style={{ background: `url(https://img.youtube.com/vi/${video.id}/hqdefault.jpg)` }}>
                    <div className="live-courses-content"></div>
                    {/* Embed the YouTube video */}
                    <div className="live-courses-image">
                      <iframe
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="content">
                    {/* <div className="client-img bg-cover" style={{ background: `url(/assets/img/live-courses/client-1.png)` }}></div> */}
                    <h4 className='mt-[30px]'>{video.title}</h4>
                    <p>{video.designation}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
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