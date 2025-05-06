import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

const InstagramHomeThree = () => {
  return (
    <div className="instagram-section fix py-[100px]">
      <div className="section-title mb-[7px] px-[100px]">
        <h6 className="wow fadeInUp">Student Life @ IICS</h6>
      </div>
      <Swiper
        spaceBetween={20}
        speed={1500}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          1199: { slidesPerView: 5 },
          991: { slidesPerView: 4 },
          767: { slidesPerView: 3 },
          575: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        className="swiper instagram-slider"
      >
        {[...Array(17)].map((_, i) => (
          <SwiperSlide className="swiper-slide" key={i}>
          <div className="instagram-image">
            <img
              src={`/assets/iics_image/life_iics/life_iics_${i + 1}.webp`}
              alt={`life_iics_${i + 1}`}
              className="w-full !h-[181px] object-cover rounded-md"
            />
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InstagramHomeThree;