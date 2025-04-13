import { Link } from "react-router-dom";

 

const FooterOne = ({style_2} : any) => {
  return (
    <>
       <footer className={`footer-section fix ${style_2 ? "" : "footer-bg"}`}>
            <div className="container">
                <div className={`footer-widget-wrapper !py-[20px] ${style_2 ? "style-4" : ""}`}>
                {/* <div className="flex gap-[10px]">
                <img
                  src="assets/iics_image/skill-logo-small.webp"
                  alt="skill-logo"
                  className="h-[50px]"
                />
                <img
                  src="assets/iics_image/nsdc-small.webp"
                  alt="skill-logo"
                  className="h-[50px]"
                />
                <img
                  src="assets/iics_image/mesc-logo-small.webp"
                  alt="skill-logo"
                  className="h-[50px]"
                />
              </div> */}
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp " data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link to="/">
                                        {/* {style_2 ? <img src="assets/img/logo/black-logo-2.svg" alt="img" /> 
                                        :                                        
                                        <img src="assets/iics_image/logo_main_white.webp" alt="img" />
                                        } */}
                                        <p className="text-white text-[25px] font-bold">INDIAN INSTITUTE OF <span className="text-[#de4141]">CREATIVE</span> SKILLS</p>
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                    The Indian Institute of Creative Skills (IICS), affiliated with NSDC Academy and operated by MESC (funded by NSDC) under the aegis of the Ministry of Skill Development & Entrepreneurship (MSDE), is dedicated to shaping the future of creative education.
                                    </p>
                                    <div className="social-icon">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        {/* <a href="#"><i className="fab fa-dribbble"></i></a>
                                        <a href="#"><i className="fab fa-behance"></i></a> */}
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i className="fab fa-youtube"></i></a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Quick Links</h3>
                                </div>
                                <ul className="list-area">
                                    <li><Link to="/courses">Enquire Now</Link></li>
                                    <li><Link to="/courses">Schools</Link></li>
                                    <li><Link to="/courses">Life at IICS</Link></li>
                                    <li><Link to="/courses">Creative Incubator</Link></li>
                                    <li><Link to="/courses">Admission</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6  wow fadeInUp" data-wow-delay=".6s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Contact Us</h3>
                                </div>
                                <ul className="list-area">
                                    <li><Link to="/about">+91 959-4949-959</Link></li>
                                    <li><Link to="/instructor">info@iicsindia.org</Link></li>
                                    {/* <li><Link to="/courses">Best Courses</Link></li>
                                    <li><Link to="/contact">Student Reviews</Link></li>
                                    <li><Link to="/faq">FAQs</Link></li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6  wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Address</h3>
                                </div>
                                <div className="footer-content">
                                    <ul className="contact-info">
                                        <li>
                                            <span className="block text-[18px] font-semibold">Delhi Campus</span>
                                            13-A, 2nd and 3rd floor, Lajpat Nagar- 4, Ring Road, New Delhi - 110024
                                        </li>
                                        {/* <li>
                                            55 Main Street, 2nd block
                                            Malborne, Australia
                                        </li>
                                        <li>
                                            <a href="mailto:info@example.com" className="link">info@example.com</a>
                                        </li>
                                        <li>
                                            <a href="tel:+0001238899">+000 (123) 88 99</a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`footer-bottom wow fadeInUp ${style_2 ? "style-4" : ""}`} data-wow-delay=".3s">
                    <p>Copyright © <Link to="/">Indian Institute of Creative Skills</Link>, all rights reserved.</p>
                </div>
                </div>
               
            </div>
            {/* <div className={`footer-name ${style_2 ? "style-2" : ""}`}>
                <h2>
                    Eduspace
                </h2>
            </div> */}
        </footer>
    </>
  );
};

export default FooterOne;