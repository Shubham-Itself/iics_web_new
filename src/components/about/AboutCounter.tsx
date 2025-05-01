import Count from "../../common/Count";

 
const AboutCounter = () => {
  return (
    <>
    <div className="counter-section-23 section-padding ">
            <div className="container custom-container">
                <div className="counter-wrapper-2 bg-cover mobile:!justify-start" style={{background: `url(/assets/img/counter-bg-3.jpg)`}}>
                    <div className="counter-items">
                        {/* <div className="icon">
                            <i className="flaticon-success"></i>
                        </div> */}
                        <div className="content">
                            <h2><span className="odometer" data-count="48.5"> <Count number={5} text='' /> </span></h2>
                            <p>Campuses Across India</p>
                        </div>
                    </div>
                    <div className="counter-items">
                        {/* <div className="icon">
                            <i className="flaticon-medal"></i>
                        </div> */}
                        <div className="content">
                            <h2><span className="odometer" data-count="100"> <Count number={50} text='+' /> </span></h2>
                            <p>Celebrity & Industry Mentors</p>
                        </div>
                    </div>
                    <div className="counter-items">
                        {/* <div className="icon">
                            <i className="flaticon-satisfaction"></i>
                        </div> */}
                        <div className="content">
                            <div className="flex gap-[10px]"> 
                            <h2><span className="odometer" data-count="99"><Count number={35} text='k' /></span></h2>
                            <h2>-</h2>
                             <h2><span className="odometer" data-count="99"><Count number={50} text='k' /></span></h2>
                            </div>
                           

                            <p>guaranteed Internship Stipend</p>
                        </div>
                    </div>
                    <div className="counter-items">
                        {/* <div className="icon">
                            <i className="flaticon-instructor"></i>
                        </div> */}
                        <div className="content">
                            <h2><span className="odometer" data-count="250"><Count number={100} text='+' /></span></h2>
                            <p>Creative Career Pathways</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </>
  );
};

export default AboutCounter;