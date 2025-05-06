import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
const BlogHomeOne = () => {
  return (
    <>
      <section className="news-section fix section-padding pt-0">
        <div className="container">
          <div className="section-title-area !justify-center">
            <div className="section-title">
              <h6 className="wow fadeInUp ">Latest News</h6>
            </div>
          </div>
          
          {/* Swiper Container */}
          <Swiper
            direction="horizontal" 
            slidesPerView={3}  
            spaceBetween={20}    
            loop={true}           
            autoplay={{          
              delay: 2500,        
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              1399: {
                  slidesPerView: 3,
              },
              1199: {
                  slidesPerView: 3,
              },
              991: {
                  slidesPerView: 3,
              },
              767: {
                  slidesPerView: 3,
              },
              575: {
                  slidesPerView: 3,
              },
              400: {
                  slidesPerView: 2,
              },
              0: {
                  slidesPerView: 1,
              },
          }}
            grabCursor={true}     // Enable grab cursor on hover
            className="swiper live-courses-slider"
             // Ensure that only a part of the slides is visible at a time
          >
            <SwiperSlide className="swiper-slide">
              <div className="news-box-items">
                <div className="news-content">
                  <span>March 28, 2025</span>
                  <h5>
                    <Link to="#">Indian Institute of Creative Skills Hosts the Creative Artists Summit, Feat Terence Lewis, Hanif Shaikh</Link>
                  </h5>
                  <Link target="blank" to="https://up18news.com/indian-institute-of-creative-skills-hosts-the-creative-artists-summit-feat-terence-lweis-hanif-shaikh/" className="link-btn">
                    Read More <i className="far fa-chevron-double-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="news-box-items">
                <div className="news-content">
                  <span>March 25, 2025</span>
                  <h5>
                    <Link to="#">युवा अपनी प्रतिभा को पहचानें और उसी क्षेत्र में काम करें : ऑस्कर विजेता ‘रेसुल पुकुट्टी’</Link>
                  </h5>
                  <Link target="blank" to="https://aaravtimes.com/youngsters-should-recognise-their-talent-and-work-in-the-same-field-oscar-winner-resul-pookutty/" className="link-btn">
                    Read More <i className="far fa-chevron-double-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="news-box-items">
                <div className="news-content">
                  <span>March 24, 2025</span>
                  <h5>
                    <Link to="#">Oscar Winner Resul Pookutty Urges Youth to Identify Their Talent and Pursue a Career in That Area</Link>
                  </h5>
                  <Link target="blank" to="https://samachar-news.com/entertainment-news/oscar-winner-resul-pookutty-urges-youth-to-identify-their-talent/" className="link-btn">
                    Read More <i className="far fa-chevron-double-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="news-box-items">
                <div className="news-content">
                  <span>March 22, 2025</span>
                  <h5>
                    <Link to="#">Indian Institute of Creative Skills: A launch pad for those aiming for a career in the Global Media</Link>
                  </h5>
                  <Link target="blank" to="https://thecurrentscenario.in/post/Mzc5Nw==?p_name=Indian+Institute+of+Creative+Skills%3A+A++launch+pad+for+those+aiming+for+a+career+in+the+Global+Media&subcatid=National%20News" className="link-btn">
                    Read More <i className="far fa-chevron-double-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="news-box-items">
                <div className="news-content">
                  <span>March 25, 2025</span>
                  <h5>
                    <Link to="#">“When Passion Becomes Profession, Excellence Is Inevitable”: Resul Pookutty At Indian Institute Of Creative Skills’ Delhi Creators Summit</Link>
                  </h5>
                  <Link target="blank" to="https://bollywoodduniya.in/2025/03/24/when-passion-becomes-profession-excellence-is-inevitable-resul-pookutty-at-indian-institute-of-creative-skills-delhi-creators-summit/" className="link-btn">
                    Read More <i className="far fa-chevron-double-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default BlogHomeOne;