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
                    <div className="news-btn d-none d-md-block wow fadeInUp" data-wow-delay=".3s">
                        <Link to="/news" className="theme-btn yellow-btn">
                            View All News
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.3s">
                        <div className="news-box-items">
                            <div className="news-image">
                                <img src="assets/img/news/01.jpg" alt="img" />
                                <img src="assets/img/news/01.jpg" alt="img" />
                            </div>
                            <div className="news-content">
                                <span>September 20, 2024</span>
                                <h3>
                                    <Link to="/news-details">
                                        The Power of Lifelong Learning
                                        Why Education Never Stops
                                    </Link>
                                </h3>
                                <Link to="/news-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.5s">
                        <div className="news-box-items">
                            <div className="news-image">
                                <img src="assets/img/news/02.jpg" alt="img" />
                                <img src="assets/img/news/02.jpg" alt="img" />
                            </div>
                            <div className="news-content">
                                <span>September 20, 2024</span>
                                <h3>
                                    <Link to="/news-details">
                                        The Power of Lifelong Learning
                                        Why Education Never Stops
                                    </Link>
                                </h3>
                                <Link to="/news-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.7s">
                        <div className="news-box-items">
                            <div className="news-image">
                                <img src="assets/img/news/03.jpg" alt="img" />
                                <img src="assets/img/news/03.jpg" alt="img" />
                            </div>
                            <div className="news-content">
                                <span>September 20, 2024</span>
                                <h3>
                                    <Link to="/news-details">
                                        The Power of Lifelong Learning
                                        Why Education Never Stops
                                    </Link>
                                </h3>
                                <Link to="/news-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
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