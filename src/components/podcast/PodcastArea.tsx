import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

const PodcastArea = () => {
  const swiperRef = useRef<any>(null);

  const videos = [
    { id: "0uvnC07CbiY", name: "Shri Ved Mani Tiwari", role: "CEO, NSDC", clientImg: "/assets/img/live-courses/client-1.png" },
    { id: "Ka8HZAwdNu4", name: "Padma Shri Dr. Resul Pookutty", role: "Oscar Winning Sound Designer", clientImg: "/assets/img/live-courses/client-2.png" },
    { id: "p0TSfYrGy7Q", name: "Ashish Kant Tatla", role: "National Coordinator, PMKVY", clientImg: "/assets/img/live-courses/client-3.png" },
    { id: "8DJkrmwm0sk", name: "Ketki Pandit", role: "Influencer & Coach", clientImg: "/assets/img/live-courses/client-1.png" },
    { id: "mYHoi-vtZg4", name: "Anand Jha", role: "Entrepreneur", clientImg: "/assets/img/live-courses/client-2.png" },
    { id: "SNAPVfTR1NE", name: "Trishikaa Bharadwaj", role: "Actor", clientImg: "/assets/img/live-courses/client-3.png" },
    { id: "vUiIeL_Cedc", name: "Nitish Yadav", role: "Motivational Speaker", clientImg: "/assets/img/live-courses/client-1.png" },
    { id: "GejS5mFhZik", name: "Tanish Shewani", role: "Performer", clientImg: "/assets/img/live-courses/client-2.png" },
    { id: "Isr2X5G4w8o", name: "Mohaan Nadaar", role: "Director & Filmmaker", clientImg: "/assets/img/live-courses/client-3.png" },
    { id: "w5MtZaxgyN8", name: "Prashant Bhanwariya", role: "Artist & Creator", clientImg: "/assets/img/live-courses/client-1.png" },
  ];

  return (
    <section className="live-courses-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">Podcast</h6>
        </div>

        <div
          onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay?.start()}
        >
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
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
              1199: { slidesPerView: 3 },
              991: { slidesPerView: 2 },
              767: { slidesPerView: 2 },
              575: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
            className="swiper live-courses-slider"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="live-courses-main-items">
                  <div className="live-courses-items">
                    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg w-full">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="content text-center mt-4">
                    {/* <div
                      className="client-img mx-auto w-16 h-16 bg-cover bg-center rounded-full"
                      style={{ backgroundImage: `url(${video.clientImg})` }}
                    ></div> */}
                    <h4 className="mt-2">{video.name}</h4>
                    {/* <p>{video.role}</p> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-dot text-center pt-5">
              <div className="dot"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PodcastArea;