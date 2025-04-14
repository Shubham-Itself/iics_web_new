import { Link } from "react-router-dom";

 

const BreadcrumbInstructor = ({ breadCrumbName , pathLink }:any) => {
  return (
    <>
       <div className="breadcrumb-wrapper style-2 style-3">
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
                    <ul className="breadcrumb-items mt-[40px] !gap-[40px] ">
                        <li className="!text-[16px]"><Link to="/">Home</Link></li>
                        <li className="!text-[16px]"> <Link to={pathLink}>{breadCrumbName+'s'}</Link></li>
                        <li className="style-2 !text-[16px]"> {breadCrumbName} Details</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  );
};

export default BreadcrumbInstructor;