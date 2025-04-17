// import { Link } from "react-router-dom";

 

const BreadcrumbCoursesDetails = ({titleCourse , mentor , duration , courseType , mentorIcon}:any) => {
   
  return (
    <>
       <section className="breadcrumb-wrapper style-2">
        <div className="shape-1">
            <img src="/assets/img/breadcrumb/shape-1.png" alt="img" />
        </div>
        <div className="shape-2">
            <img src="/assets/img/breadcrumb/shape-2.png" alt="img" />
        </div>
        <div className="dot-shape">
            <img src="/assets/img/breadcrumb/dot-shape.png" alt="img" />
        </div>
        <div className="vector-shape">
            <img src="/assets/img/breadcrumb/Vector.png" alt="img" />
        </div>
        <div className="container">
            <div className="page-heading">
                <ul className="breadcrumb-items !mt-[60px] !mb-[20px]">
                    {/* <li><Link to="/">Home</Link></li> */}
                    {/* <li><Link to="/courses-grid">Courses</Link></li> */}
                    {/* <li className="style-2"> Course Details</li> */}
                </ul>
                <div className="breadcrumb-content">
                    <h1>{titleCourse}</h1>
                    <div className="courses-breadcrumb-items">
                        <div className="client-image-items">
                            <img src={mentorIcon} alt="img" className="w-[60px] h-[60px] object-cover rounded-[50%]" />
                            <div className="client-content">
                                <span>Chief Mentor</span>
                                <h5>{mentor}</h5>
                            </div>
                        </div>
                        <div className="client-image-items">
                            <div className="client-content">
                                <span>Duration</span>
                                <h5>{duration}</h5>
                            </div>
                        </div>
                        <div className="client-image-items">
                            <div className="client-content">
                                <span>Course Type</span>
                                <h5>{courseType}</h5>
                            </div>
                        </div>
                        {/* <div className="client-image-items">
                            <div className="client-content">
                                <span>Reviews</span>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <b>(15)</b>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        </section>
    </>
  );
};

export default BreadcrumbCoursesDetails;