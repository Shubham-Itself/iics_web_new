import { useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const videoLinks = [
  { id: 'i_N6o6O73OM', title: 'Deeksha Toor', designation: 'Indian Singer & Digital Creator' , thumbnailUrl:'/assets/iics_image/industry_speak/Deeksha_Toor.webp'},
  { id: 'XpMuYy_EMSs', title: 'Keshav Sadhna', designation: 'Actor, Fashion & Lifestyle Digital Creator' ,thumbnailUrl:'/assets/iics_image/industry_speak/Keshav_Sadhna.webp' },
  { id: 'dSjYInJeTyQ', title: 'Shirin Sewani', designation: 'Indian Actor', thumbnailUrl:'/assets/iics_image/industry_speak/Shirin.webp' },
  { id: 'uL_pI5H5mvo', title: 'Radha Bhatt', designation: 'Actress & Trauma Informed Coach' , thumbnailUrl:'/assets/iics_image/industry_speak/Radha_Bhatt.webp' },
  { id: 'VWl5G8CFqNY', title: 'Siddhartha Sharma', designation: 'Indian Actor, Acting Mentor & Filmmaker' , thumbnailUrl:'/assets/iics_image/industry_speak/Siddhartha_Sharma.webp' },
];


const VideoPlayer = ({ videoId, thumbnail }: { videoId: string; thumbnail: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return isPlaying ? (
    <iframe
      className="w-full h-[315px] rounded-lg"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      title="Video"
      loading="lazy"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  ) : (
    <div
      className="w-full h-[315px] rounded-lg cursor-pointer relative group overflow-hidden"
      onClick={() => setIsPlaying(true)}
    >
      <img src={thumbnail} alt="video thumbnail" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition">
        <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
};

const CoursesHomeTwo = () => {
  return (
    <section className="live-courses-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">Industry Speak</h6>
        </div>

        <Swiper
          spaceBetween={30}
          speed={1500}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
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
          {videoLinks.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="live-courses-main-items">
                <div className="live-courses-items">
                  <VideoPlayer
                    videoId={video.id}
                    thumbnail={video.thumbnailUrl}
                  />
                </div>
                <div className="content text-center mt-4">
                  <h4>{video.title}</h4>
                  <p>{video.designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-dot text-center pt-5">
          <div className="dot"></div>
        </div>
      </div>
    </section>
  );
};

export default CoursesHomeTwo;
