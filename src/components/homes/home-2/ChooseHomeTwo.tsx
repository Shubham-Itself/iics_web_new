import { Link } from "react-router-dom";


const ChooseHomeTwo = () => {
  return (
    <>
       <section className="choose-us-section choose-bg fix section-padding pt-0">
            <div className="container-fluid">
                <div className="choose-us-wrapper">
                    <div className="row g-4 align-items-center">
                        <div className="col-xxl-5 col-xl-6">
                            <div className="section-title mb-0">
                                <h6 className="yellow-text wow fadeInUp">
                                Apply Now
                                </h6>
                                <h2 className="text-white wow fadeInUp !text-[36px] !mb-[40px]" data-wow-delay=".3s">
                                Admission Open 2025
                                </h2>
                                <div className="header-button min-l:!hidden">
                    <Link
                      to="/register"
                      className="theme-btn yellow-btn !px-[16px] !py-[12px] "
                    >
                      Register Now
                    </Link>
                  </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-6">
                            <div className="choose-us-counter-items !p-[15px]">
                                <div className="row g-4">
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="choose-us-counter-box">
                                            <div className="icon">
                                                <i className="flaticon-success"></i>
                                            </div>
                                            <div className="content">
                                                <h2 className="!text-[20px]">25th April 2025</h2>
                                                <p>Entrance Exam</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="choose-us-counter-box style-2">
                                            <div className="icon">
                                                <i className="flaticon-instructor"></i>
                                            </div>
                                            <div className="content">
                                                <h2 className="!text-[20px]">19th April 2025</h2>
                                                <p>Start Date</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4">
                            <div className="choose-us-image">
                                <img src="assets/img/feature/choose-us.png" alt="img" className="wow img-custom-anim-left" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default ChooseHomeTwo;