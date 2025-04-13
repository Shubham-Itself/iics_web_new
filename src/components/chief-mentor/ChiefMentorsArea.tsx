import { Link } from "react-router-dom";

const ChiefMentorsArea = () => {
  const leadersDetails = [
   
   
    

    {
      leaderName: "Padma Shri Dr. Resul Pookutty",
      leaderDesignation: "Academy Award Winner, Indian Sound Designer",
      instagramLink: "",
      linkedIn: "",
      facebookLink: "",
      image: "assets/iics_image/leaders/resul_pookutty.webp",
    },
    {
      leaderName: "Mr. Manvendra Shukul",
      leaderDesignation: "CEO, Lakshya Digital",
      instagramLink: "",
      linkedIn: "",
      facebookLink: "",
      image: "assets/iics_image/leaders/manvendra_shukul.webp",
    },
   
    {
      leaderName: "Dr.(Hon) Anusha Srinivasan Iyer",
      leaderDesignation:
        "Brand Custodian, Image Strategist, International Award- Winning Writer- Director, Firebrand Journalist, Egalitarian Activist",
      instagramLink: "",
      linkedIn: "",
      facebookLink: "",
      image: "assets/iics_image/leaders/anusha_srinivasan_iyer.webp",
    },
   
    {
      leaderName: "Ms. Ketki Pandit",
      leaderDesignation:
        "Film Producer, Director, Storyteller, Founder- Youth Music",
      instagramLink: "",
      linkedIn: "",
      facebookLink: "",
      image: "assets/iics_image/leaders/ketki_pandit.webp",
    },
    {
      leaderName: "Dr. (Hon) Amit Behl",
      leaderDesignation:
        "Award-Winning Film, Television, Theatre Actor, Professor of Media & Entertainment, Creative Producer & Senior Consultant",
      instagramLink: "",
      linkedIn: "",
      facebookLink: "",
      image: "assets/iics_image/leaders/amit_behl.webp",
    },
    {
      leaderName: "Ms. Yasmin Rodgers",
      leaderDesignation: "Celebrity Makeup & Prosthetics Artist",
      instagramLink: "",
      linkedIn: "",
      facebookLink: "",
      image: "assets/iics_image/leaders/yasmin_rodger.webp",
    },
    {
      leaderName: "Mr. Anand Jha",
      leaderDesignation: "CEO, Nilee Games",
      instagramLink: "",
      linkedIn: "",
      facebookLink: "",
      image: "assets/iics_image/leaders/anand_jha.webp",
    },
    {
      leaderName: "Ms. Sushma Gaikwad",
      leaderDesignation:
        "Co-founder Ice Global, Experiential Media and Director, Wizcraft MIME",
      instagramLink: "",
      linkedIn: "",
      facebookLink: "",
      image: "assets/iics_image/leaders/sushma_gaikwad.webp",
    },
    {
      leaderName: "Dr. (Hon) S Ramachandran",
      leaderDesignation:
        "Journalist, Filmmaker, Brand Strategist, Author, Theatrician",
      instagramLink: "",
      linkedIn: "",
      facebookLink: "",
      image: "assets/iics_image/leaders/ramachandran.webp",
    },

  ];
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
                      className="w-full h-full rounded-full"
                      style={{
                        objectFit: leader.leaderName.includes("Sushma")
                          ? "fill"
                          : "cover",
                      }}
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
                      <Link to="/details" 
                      state={{
                        leaderName: leader.leaderName,
                        leaderImage: leader.image,
                        leaderDesig: leader.leaderDesignation,
                        
                        breadCrumbName:'Chief Mentor',
                         pathLink:'/chiefMentors'
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

export default ChiefMentorsArea;
