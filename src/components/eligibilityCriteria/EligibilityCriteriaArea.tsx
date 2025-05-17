import { Link } from "react-router-dom";


 

const EligibilityCriteriaArea = () => {

  const careers = [
    {
       
        name:'1. Performing Arts & Media Management',
        degreeProgram:'2 Years (12 Months Learning + 6 Months Industry Experience + 6 Months Paid Internship)',
        certificateProgram:'Open to all, aspiring actors, theatre enthusiasts, media professionals, and graduates from related fields.',
        outcome:'Candidates specializing in Acting will have the opportunity to showcase their work (videos, audio, etc.) to relevant casting agencies and studios while Students specializing in Media Management will have the opportunity to work with media houses and film/TV/OTT platforms, leading to future employment and entrepreneurship opportunities.',
     
       

    },
    {
       name:'2. Hair, Makeup & Prosthetics',
       degreeProgram:'12th Pass from a recognized Board with an interest in makeup, hairstyling, and prosthetics.',
        certificateProgram:'Open to makeup artists, hairstylists, fashion professionals, beauty influencers, and graduates from related disciplines.',
        outcome:'Candidates will work on a full-length film, fashion show, or commercial project.',
     
     
        
    },
    {
        name:'3. Sound Recording & Sound Design',
        degreeProgram:'12th Pass from a recognized Board with an interest in sound engineering and design.',
        certificateProgram:'Open to B.Tech, B.Sc. graduates in Sound Engineering or related disciplines, music producers, audio technicians, and professionals in the music and film industry.',
        preferred:'Students with Science.',
        outcome:'The course will equip students to become proficient sound editors/recordists/ designers/engineers as per industry standard. The field is expansive and the course will facilitate students to be expert professionals across the globe.',
     
        
    },
    {
        name:'4. 3D Game Art',
        degreeProgram:'12th Pass from a recognized Board with an interest in 3D modeling and game design.',
        certificateProgram:'Open to B.Sc., BFA, B.Tech graduates in Animation, Game Art, or related fields, digital artists, gaming professionals, and designers looking to enhance their 3D skills.',
        outcome:'Candidates will contribute to a real-world game development project, creating 3D assets for a published video game or immersive VR experience.',
     
        
    },
    {
        name:'5. Advanced Gaming & XR Innovations',
        degreeProgram:'12th Pass from a recognized board with an interest in gaming, VR, and AR technologies.',
        certificateProgram:'Open to B.Tech, B.Sc., BCA graduates in Game Development, XR, or related fields, AR/VR developers, designers, and gaming professionals.',
        outcome:'The candidate will work on live projects in Video Game Development, Extended Reality.',
     
        
    },
    {
        name:'6. Journalism, PR, Image Strategization & Branding',
        degreeProgram:'12th Pass from a recognized Board with an interest in journalism, public relations, and brand communication.',
        certificateProgram:'Open to Mass Communication, BBA, and MBA graduates, PR professionals, journalists, media strategists, and corporate communication executives.',
        outcome:'Candidates will get a chance to report for a media house, work on a brand’s PR campaign, or contribute to a digital publication',
     
        
    },
    {
        name:'7. Events & Experiential Management',
        degreeProgram:'12th Pass from a recognized Board with an interest in event planning and experiential marketing.',
        certificateProgram:'Open to BBA, MBA graduates, event planners, marketing professionals, hospitality managers, and individuals passionate about experiential events.',
        outcome:'Candidates will plan and execute a large-scale live event, corporate conference, or brand activation, handling real-time logistics, sponsorships, and audience engagement.',
     
        
    },
    {
        name:'8. Digital Management & Content Creation',
        degreeProgram:'12th Pass from a recognized Board with an interest in digital media, content creation, and online branding.',
        certificateProgram:'Open to BBA, MBA, Mass Communication, and Marketing graduates, content creators, social media strategists, influencers, and digital marketers.',
        outcome:'Create powerful content for live brand and influencer projects, master digital tools, and build a portfolio tailored for real-world success.',
     
        
    },
  ]

  return (
    <>
       <section className="event-list-section fix section-padding pt-0">
  <div className="container">
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto my-[60px]">
      <p className="text-[35px] mobile:text-[24px] font-extrabold text-black leading-tight mb-[20px]">
        Find the Right Course for Your Passion and Potential
      </p>
      <p className="text-[18px] mobile:text-[16px] text-gray-700">
        At IICS, we offer a diverse range of programs to turn your creative interests into career opportunities. Whether it's filmmaking, beauty and prosthetics, gaming, music, content creation, or media strategy — your journey starts here.
      </p>
    </div>

    {/* Career Cards */}
    <div className="grid gap-[40px]">
      {careers.map((career, index) => (
        <div
          key={index}
          className="p-6 bg-white rounded-2xl shadow-[inset_5px_5px_10px_#a9a9aa55,_inset_-5px_-5px_10px_#ffffff7e] transition hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
        >
          <h4 className="text-[22px] mobile:text-[18px] text-[#005BFF] font-bold mb-4">
            <Link to="#">{career.name}</Link>
          </h4>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-[#f9fafb] rounded-xl border shadow-[5px_5px_12px_#a9a9aa55,_-5px_-5px_12px_#ffffff7a]">
              <p className="font-semibold text-[18px] mobile:text-[16px] text-black mb-2">🎓 Eligibility Criteria</p>
              <ul className="space-y-2 text-black text-[15px] mobile:text-[14px]">
                <li>
                  <span className="font-semibold">Degree Program:</span> {career.degreeProgram}
                </li>
                {career.preferred && (
                  <li>
                    <span className="font-semibold">Preferred:</span> {career.preferred}
                  </li>
                )}
                <li>
                  <span className="font-semibold">Certificate Program:</span> {career.certificateProgram}
                </li>
                <li>
                  <span className="font-semibold">Course Outcome:</span> {career.outcome}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Additional Requirements Note */}
    <div className="bg-[#fefefe] p-6 rounded-xl shadow-md mt-[60px] border-l-[6px] border-[#005BFF]">
      <p className="text-[22px] font-semibold text-[#005BFF] mb-3">📌 Additional Requirements</p>
      <p className="text-[16px] font-semibold text-black mb-3">Some courses may require:</p>
      <ul className="list-disc pl-6 text-[16px] text-gray-800 space-y-2">
        <li>
          <span className="font-bold">Portfolio submission</span> <span className="font-normal">(for creative programs)</span>
        </li>
        <li>
          <span className="font-bold">Audition</span> <span className="font-normal">(for performing arts)</span>
        </li>
        <li>
          <span className="font-bold">Interview</span> <span className="font-normal">as part of the final selection</span>
        </li>
      </ul>
      <p className="text-[15px] text-gray-600 mt-5 italic">
        *Final selection is based on performance in the entrance test, portfolio/audition, and personal interview.
      </p>
    </div>
  </div>
</section>
    </>
  );
};

export default EligibilityCriteriaArea;