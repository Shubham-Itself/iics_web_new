import { Link } from "react-router-dom";

 

const BlogHomeOne = () => {
  return (
    <>
      <section className="news-section fix section-padding pt-0">
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <h6 className="wow fadeInUp">
                        Latest News
                        </h6>
                        {/* <h2 className="wow fadeInUp" data-wow-delay=".3s"></h2> */}
                    </div>
                    {/* <div className="news-btn d-none d-md-block wow fadeInUp" data-wow-delay=".3s">
                        <Link to="/news" className="theme-btn yellow-btn">
                            View All News
                        </Link>
                    </div> */}
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.3s">
                        <div className="news-box-items">
                            {/* <div className="news-image">
                                <img src="assets/img/news/01.jpg" alt="img" />
                                <img src="assets/img/news/01.jpg" alt="img" />
                            </div> */}
                            <div className="news-content">
                                <span>March 28, 2025</span>
                                <h3>
                                    <Link to="#">
                                    Indian Institute of Creative Skills Hosts the Creative Artists Summit, Feat Terence Lewis, Hanif Shaikh
                                    </Link>
                                </h3>
                                <Link target="blank" to="https://up18news.com/indian-institute-of-creative-skills-hosts-the-creative-artists-summit-feat-terence-lweis-hanif-shaikh/" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.5s">
                        <div className="news-box-items">
                            {/* <div className="news-image">
                                <img src="assets/img/news/02.jpg" alt="img" />
                                <img src="assets/img/news/02.jpg" alt="img" />
                            </div> */}
                            <div className="news-content">
                                <span>March 25, 2025</span>
                                <h3>
                                    <Link to="#">
                                    युवा अपनी प्रतिभा को पहचानें और उसी क्षेत्र में काम करें : ऑस्कर विजेता ‘रेसुल पुकुट्टी’
                                    </Link>
                                </h3>
                                <Link to="https://aaravtimes.com/youngsters-should-recognise-their-talent-and-work-in-the-same-field-oscar-winner-resul-pookutty/" target="blank" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.7s">
                        <div className="news-box-items">
                            {/* <div className="news-image">
                                <img src="assets/img/news/03.jpg" alt="img" />
                                <img src="assets/img/news/03.jpg" alt="img" />
                            </div> */}
                            <div className="news-content">
                                <span>March 24, 2025</span>
                                <h3>
                                    <Link to="#">
                                    Oscar Winner Resul Pookutty Urges Youth to Identify Their Talent and Pursue a Career in That Area
                                    </Link>
                                </h3>
                                <Link target="blank" to="https://samachar-news.com/entertainment-news/oscar-winner-resul-pookutty-urges-youth-to-identify-their-talent/" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.7s">
                        <div className="news-box-items">
                            {/* <div className="news-image">
                                <img src="assets/img/news/03.jpg" alt="img" />
                                <img src="assets/img/news/03.jpg" alt="img" />
                            </div> */}
                            <div className="news-content">
                                <span>March 22, 2025</span>
                                <h3>
                                    <Link to="#">
                                    Indian Institute of Creative Skills: A launch pad for those aiming for a career in the Global Media
                                    </Link>
                                </h3>
                                <Link target="blank" to="https://thecurrentscenario.in/post/Mzc5Nw==?p_name=Indian+Institute+of+Creative+Skills%3A+A++launch+pad+for+those+aiming+for+a+career+in+the+Global+Media&subcatid=National%20News" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.7s">
                        <div className="news-box-items">
                            {/* <div className="news-image">
                                <img src="assets/img/news/03.jpg" alt="img" />
                                <img src="assets/img/news/03.jpg" alt="img" />
                            </div> */}
                            <div className="news-content">
                                <span>March 25, 2025</span>
                                <h3>
                                    <Link to="#">
                                    “When Passion Becomes Profession, Excellence Is Inevitable”: Resul Pookutty At Indian Institute Of Creative Skills’ Delhi Creators Summit
                                    </Link>
                                </h3>
                                <Link target="blank" to="https://bollywoodduniya.in/2025/03/24/when-passion-becomes-profession-excellence-is-inevitable-resul-pookutty-at-indian-institute-of-creative-skills-delhi-creators-summit/" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default BlogHomeOne;