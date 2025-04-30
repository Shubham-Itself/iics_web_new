import { Link } from "react-router-dom";

const FooterOne = ({ style_2 }: any) => {
  return (
    <footer className={`footer-section fix ${style_2 ? "" : "footer-bg"}`}>
      <div className="container">
        <div className={`footer-widget-wrapper py-5 ${style_2 ? "style-4" : ""} text-white`}>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <div className="widget-head mb-4">
                  <Link to="/">
                    <p className="text-xl font-bold leading-tight text-white">
                      INDIAN INSTITUTE OF <span className="text-[#de4141]">CREATIVE</span> SKILLS
                    </p>
                  </Link>
                </div>
                <p className="text-sm mb-4">
                  The Indian Institute of Creative Skills (IICS), affiliated with NSDC Academy and operated by MESC (funded by NSDC) under MSDE, is dedicated to shaping the future of creative education.
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <p className="text-sm font-semibold">Follow Us:</p>
                  <div className="flex gap-3 text-lg">
                    <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/iicsindiaorg/" className="text-white"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-white"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://x.com/IICS_INDIA" className="text-white"><i className="fab fa-twitter"></i></a>
                    <a href="https://youtube.com/@iicsindiaorg?si=3jYkJMvyrO_lO97m" className="text-white"><i className="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-7 col-lg-8 col-md-6">
              <div className="single-footer-widget">
                <div className="widget-head mb-4">
                  <h3 className="text-lg font-semibold">Campuses</h3>
                </div>
                <ul className="contact-info grid grid-cols-2 gap-4 text-sm">
                  {[
                    {
                      title: "Delhi Campus",
                      address: "13-A 3rd Floor Above Tata Motors Showroom Main Ring Road Lajpat Nagar -4 New Delhi - 110024",
                      phone: "+91 959-4949-959",
                      email: "info@iicsindia.org",
                    },
                    {
                      title: "Bhopal",
                      address: "Sage University, Katara Hills, Extension, Bhopal, Madhya Pradesh 462022",
                      phone: "+91 959-4949-959",
                      email: "info@iicsindia.org",
                    },
                    {
                      title: "Ahmedabad",
                      address: "Karnavati University, Uvarsad-Adalaj Road, Gandhinagar, Gujarat 382422",
                      phone: "+91 959-4949-959",
                      email: "info@iicsindia.org",
                    },
                    { title: "Kolkata", address: "Coming Soon" },
                    { title: "Bhubaneshwar", address: "Coming Soon" },
                  ].map((item, idx) => (
                    <li key={idx}>
                      <span className="font-bold">{item.title}</span><br />
                      {item.address}<br />
                      {item.phone && (<><span className="font-semibold">Mobile: </span>{item.phone}<br /></>)}
                      {item.email && (<><span className="font-semibold">Email: </span>{item.email}</>)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="single-footer-widget mb-4 col-xl-2 col-lg-4 col-md-6">
              <div className="widget-head mb-2">
                <h3 className="text-lg font-semibold">Quick Links</h3>
              </div>
              <ul>
                <li><Link to="/courses" className="text-white text-sm">Enquire Now</Link></li>
                <li><Link to="/courses" className="text-white text-sm">Schools</Link></li>
                <li><Link to="/courses" className="text-white text-sm">Life at IICS</Link></li>
                <li><Link to="/courses" className="text-white text-sm">Creative Incubator</Link></li>
                <li><Link to="/courses" className="text-white text-sm">Admission</Link></li>
              </ul>
            </div>
          </div>

          {/* <div className="flex flex-wrap justify-between items-start mt-8 text-sm">
            

            <div className="single-footer-widget mb-4">
              <div className="widget-head mb-2">
                <h3 className="text-lg font-semibold">Contact Us</h3>
              </div>
              <ul>
                <li><a href="tel:+919594949959" className="text-white">+91 959-4949-959</a></li>
                <li><a href="mailto:info@iicsindia.org" className="text-white">info@iicsindia.org</a></li>
              </ul>
            </div>
          </div> */}

          <div className={`footer-bottom mt-5 text-center text-xs ${style_2 ? "style-4" : ""}`}>
            <p>© {new Date().getFullYear()} <Link to="/" className="underline text-white">Indian Institute of Creative Skills</Link>, all rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;