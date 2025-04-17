import { Link } from "react-router-dom";

const ManagementArea = () => {
  const leadersDetails = [
    {
      leaderName: "Dr. Mohit Soni",
      leaderDesignation: "CEO, Media and Entertainment Skills Council (MESC)",
      instagramLink: "",
      linkedIn: "",
      facebookLink: "",
      image: "assets/iics_image/leaders/mohit.webp",
    },
    {
      leaderName: "Ms. Pooja Arora",
      leaderDesignation: "COO, Media and Entertainment Skills Council (MESC) ",
      instagramLink: "",
      linkedIn: "",
      facebookLink: "",
      image: "assets/iics_image/management/pooja.webp",
    },
    {
      leaderName: "Ms. Roshni Sehgal",
      leaderDesignation: "Business and International Alliances Head, Media and Entertainment Skills Council (MESC)",
      instagramLink: "",
      linkedIn: "",
      facebookLink: "",
      image: "assets/iics_image/management/roshni.webp",
    },
    // {
    //   leaderName: "Ms. Heena Bhardwaj",
    //   leaderDesignation: "Project Head",
    //   instagramLink: "",
    //   linkedIn: "",
    //   facebookLink: "",
    //   image: "assets/iics_image/management/ms-heena.webp",
    // },
    {
      leaderName: "Ms. Nancy Singhal",
      leaderDesignation: "Deputy General Manager, Media and Entertainment Skills Council (MESC)",
      instagramLink: "",
      linkedIn: "",
      facebookLink: "",
      image: "assets/iics_image/management/nancy.webp",
    },

    {
      leaderName: "Ms. Payal Diwakar",
      leaderDesignation:
        "Executive Assistant",
      instagramLink: "",
      linkedIn: "",
      facebookLink: "",
      image: "assets/iics_image/management/payal.webp",
    },
    {
      leaderName: "Mr. Aman Sharma",
      leaderDesignation: "General Manager Marketing",
      instagramLink: "",
      linkedIn: "",
      facebookLink: "",
      image: "assets/iics_image/management/aman.webp",
    },
    {
      leaderName: "Ms. Varsha",
      leaderDesignation: "Manager, Business Development",
      instagramLink: "",
      linkedIn: "",
      facebookLink: "",
      image: "assets/iics_image/management/varsha.webp",
    },
    {
      leaderName: "Mr. Sahil Bhatnagar",
      leaderDesignation: "Manager, Academic Excellence",
      instagramLink: "",
      linkedIn: "",
      facebookLink: "",
      image: "assets/iics_image/management/sahil.webp",
    },
    {
      leaderName: "Ms. Prishita Tiwari",
      leaderDesignation: "Social Media Manager",
      instagramLink: "",
      linkedIn: "",
      facebookLink: "",
      image: "assets/iics_image/management/prishita.webp",
    }
   
  ];
  return (
    <>
      <section className="team-section-5 fix section-padding ">
        <div className="container">
          <div className="section-title  text-center">
            <h6 className="wow fadeInUp">
            Strategic Minds Powering Creative Education

            </h6>
            <h2
              className="wow fadeInUp !text-[18px] !font-normal !text-start leading-[30px]"
              data-wow-delay=".3s"
            >
              At the Indian Institute of Creative Skills, management is not just about running systems — it’s about empowering students, supporting mentors, and enabling industry integration. Our team is accessible, accountable, and agile, constantly evolving to meet the dynamic needs of the creative industries and the students we serve.
            </h2>
          </div>
          <div className="row">
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
                      <Link to="/">{leader.leaderName}</Link>
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

export default ManagementArea;
