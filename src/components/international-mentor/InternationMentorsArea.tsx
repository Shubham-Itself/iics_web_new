import { Link } from "react-router-dom";

export const leadersDetails = [
   
   
    

  {
    leaderName: "Mr. Mark Theodossiou",
    leaderDesignation: "International Mentor",
    instagramLink: "",
    linkedIn: "",
    facebookLink: "",
    image: "/assets/iics_image/internationalMentors/mark.webp",
    mentorType:'International Mentor',
    pathLink:'/internationalMentors'

  },
  {
    leaderName: "Mr. Gareth Benson",
    leaderDesignation: "International Mentor",
    instagramLink: "",
    linkedIn: "",
    facebookLink: "",
    image: "/assets/iics_image/internationalMentors/garethBenson.webp",
    mentorType:'International Mentor',
     pathLink:'/internationalMentors'

  },
 
 
 
  
];

const InternationalMentorsArea = () => {
  
  return (
    <>
      <section className="team-section-5 fix section-padding ">
        <div className="container">
          <div className="section-title  text-center">
            <h6 className="wow fadeInUp">
              Driven by Purpose, Defined by Passion
            </h6>
            <h2
              className="wow fadeInUp !text-[18px] !font-normal !text-start leading-[30px]"
              data-wow-delay=".3s"
            >
              At IICS, leadership is rooted in collaboration, creativity, and
              impact. We believe the best institutions are led by those who have
              lived the industry — and are now committed to transforming it
              through education. From the boardroom to the classroom, our
              leaders are hands-on, future-focused, and driven to build India’s
              creative capital.
            </h2>
          </div>
          <div className="row justify-evenly">
            {leadersDetails.map((leader, index) => (
              <div
                key={index}
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="team-card-items style-2">
                  <div className="thumb w-[250px] h-[250px] overflow-hidden mx-auto">
                    <img
                      src={leader.image}
                      alt="img"
                      className="w-full h-full object-cover rounded-full"
                    />
                    <div className="leader-overlay"></div>
                    <div className="box box1">
                      <a href="#" style={{ color: "#3b5998" }}>
                        <i className="fab fa-facebook-f fa-2x"></i>
                      </a>
                    </div>

                    <div className="box box2">
                      <a href="#" style={{ color: "#E1306C" }}>
                        <i className="fab fa-instagram fa-2x"></i>
                      </a>
                    </div>

                    <div className="box box3">
                      <a href="#" style={{ color: "#0077B5" }}>
                        <i className="fab fa-linkedin-in fa-2x"></i>
                      </a>
                    </div>

                    <div className="box box4"></div>
                    {/* <div className="social-icon"></div> */}
                  </div>
                  <div className="content">
                    <h4>
                    <Link to={`/details/${encodeURIComponent(leader.leaderName?.toString() || '')}`}
                                              state={{
                                                leaderName: leader.leaderName,
                                                leaderImage: leader.image,
                                                leaderDesig: leader.leaderDesignation,
                                               breadCrumbName:'International Mentor',
                                               pathLink:'/internationalMentors'

                                              }}
                      >{leader.leaderName}</Link>
                    </h4>
                    <p>{leader.leaderDesignation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InternationalMentorsArea;
