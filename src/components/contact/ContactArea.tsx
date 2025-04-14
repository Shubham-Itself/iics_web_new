 
const ContactArea = () => {
  return (
    <>
      <section className="contact-section section-padding  fix">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">Get In Touch</h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Need More Information?
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="contact-box-items">
                            <div className="icon">
                                <i className="flaticon-map"></i>
                            </div>
                            <h5>
                            Headquarters
                            </h5>
                            <div className="image">
                                <img src="assets/img/small-line.png" alt="img" />
                            </div>
                            <h4>
                            13-A, 3rd Floor, <br /> Above Tata Motors Showroom, Main Ring Road,<br /> Lajpat Nagar -4, New Delhi - 110024
                            </h4>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="contact-box-items">
                            <div className="icon">
                                <i className="flaticon-send-data"></i>
                            </div>
                            <h5>
                                Email Address
                            </h5>
                            <div className="image">
                                <img src="assets/img/small-line.png" alt="img" />
                            </div>
                            <h4>
                                <a href="mailto:supportedus@gmail.com">info@iicsindia.org</a> 
                             
                            </h4>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="contact-box-items">
                            <div className="icon">
                                <img src="assets/img/call.png" alt="img" />
                            </div>
                            <h5>
                            Contact Number
                            </h5>
                            <div className="image">
                                <img src="assets/img/small-line.png" alt="img" />
                            </div>
                            <h4>
                                <a href="tel:++00012345688">+91- 959-4949-959</a> <br />
                               
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default ContactArea;