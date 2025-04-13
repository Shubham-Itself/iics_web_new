import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const MarqueeOne = ({ style_2 }: any) => {
 
  return (
    <>
    <div className="hidden">
      {style_2}
    </div>
      <div className="marquee-section style-header">
        <div className={`mycustom-marque`}>
          <div className="scrolling-wrap">
            <div className="comm justify-between w-full">
              <div className="flex gap-[10px]">
                <img
                  src="/assets/iics_image/skill-logo-small.webp"
                  alt="skill-logo"
                  className="h-[50px]"
                />
                <img
                  src="/assets/iics_image/nsdc-small.webp"
                  alt="skill-logo"
                  className="h-[50px]"
                />
                <img
                  src="/assets/iics_image/mesc-logo-small.webp"
                  alt="skill-logo"
                  className="h-[50px]"
                />
              </div>

              {/* <div className="flex gap-[20px] items-center">
               
              </div> */}

              <div className="flex gap-[20px] items-center">
              <p>Our Legacy</p>
              <p>Associate with us</p>
                <p>info@iicsindia.org</p>
                <p>+91 959-4949-959</p>
                <FontAwesomeIcon icon={faSquareFacebook} className="text-[#1877F2] text-[25px]" />
                
                
                <FontAwesomeIcon icon={faInstagram} className="text-[#E4405F] text-[25px]"/>
                <FontAwesomeIcon icon={faYoutube} className="text-[#FF0000] text-[25px]"/>
              </div>

              {/* <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Experience Instructors</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Kindergarten Study</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> 25% Coupon Bonus</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> 25% Extra Coupon Bonus</div> */}
            </div>
            {/* <div className="comm">
                        <div></div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Education & University</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Online Education</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> 230+ Quality Courses</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Experience Instructors</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Kindergarten Study</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> 25% Coupon Bonus</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> 25% Extra Coupon Bonus</div>
                    </div> */}
            {/* <div className="comm">
                        <div></div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Education & University</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Online Education</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> 230+ Quality Courses</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Experience Instructors</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Kindergarten Study</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> 25% Coupon Bonus</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> 25% Extra Coupon Bonus</div>
                    </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MarqueeOne;
