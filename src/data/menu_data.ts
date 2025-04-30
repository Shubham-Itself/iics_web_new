export interface DataType {
  id: number;
  title?: string;
  link: string;
  icon: string;
  img_dropdown?: boolean;
  has_dropdown?: boolean;
  has_dropdown_inner?: boolean;
  sub_menus?: {
    link?: string;
    title?: string;
    title2?: string | any;
    btn_title?: string;
    one_page_link?: string | any;
    one_page_title?: string;
    demo_img?: string | any;
    inner_menu?: boolean;
    mentorName?: string;
   
    mentorIcon?: string;
    mentorInfo?: string;
    mentorTwoName?:string;
    mentorTwoAbout?:string;
    mentorTwoIcon?:string;
    mentorTwoInfo?:string;
    duration?: string;
    courseType?: string;
    fees?: string;
    registrationStart?:string
    registrationEnd?:string
    onlineEntranceExam?:string
    batchLaunchDate?:string
    courseInfo?: string;
    studentsSeat?: string;
    enrollmentDeadLine?: string;
    courseStartDate?: string;
    industryMentors?: string[];
    eligibilityCriteria?: string[];
    courseImg?: string;
    mentorAbout?:string;
    courseVideo?: string;
    courseCurricullam?: {};
    careerJob?: string;
    courseOverview?:String;
    careerEntrepreneurship?: string;
	imagesArr?:string[];
    inner_menus?: {
      link?: string;
      title?: string;
      subHead?:string;
      mentorName?: string;
      mentorIcon?: string;
      mentorInfo?: string;
      mentorAbout?:string;
      mentorTwoName?:string;
      mentorTwoAbout?:string;
      mentorTwoIcon?:string;
      mentorTwoInfo?:string;
      duration?: string;
      courseType?: string;
      fees?: string;
      registrationStart?:string
      registrationEnd?:string
      onlineEntranceExam?:string
      batchLaunchDate?:string
      courseVideo?: string;
      courseInfo?: string;
      studentsSeat?: string;
      enrollmentDeadLine?: string;
      courseStartDate?: string;
      industryMentors?: string[];
      eligibilityCriteria?: string[];
      courseImg?: string;
      mentorMessage?: string;
      courseCurricullam?: {};
      courseOverview?:String;
      careerJob?: string;
      careerEntrepreneurship?: string;
	  imagesArr?:string[];
    }[];
  }[];
}

// menu data
const menu_data: DataType[] = [
  {
    id: 1,
    title: "IICS",
    link: "#",
    icon: "fas fa-home-lg",
    img_dropdown: true,
    has_dropdown_inner: true,
    sub_menus: [
      {
        link: "#",
        title: "About",
        inner_menu: true,
        inner_menus: [
          { link: "/about", title: "About IICS" },
          {
            link: "/how-to-apply",
            title: "Shri Jayant Chaudhary",
            subHead:'Message from Hon’ble Minister of State (Independent Charge)',
            mentorMessage:
              "The Media & Entertainment sector is a cornerstone of India’s global influence, and its future depends on skilled professionals who can push creative and technological boundaries. IICS plays a vital role in equipping young talent with cutting-edge expertise, ensuring they are ready to lead the industry. The Ministry of Skills Development & Entrepreneurship remains committed to strengthening skill- based education, industry collaborations, and infrastructure to make India the world’s creative powerhouse.",
          },
          {
            link: "/eligibilityCriteria",
            title: "Shri Atul Kumar Tiwari",
            subHead:'Message from Secretary of the Ministry of Skill Development & Entrepreneurship',
            mentorMessage:
              "India’s Media & Entertainmentsector is poised for exponential growth, with the AVGC (Animation, Visual Effects, Gaming, and Comics) industry alone projected to exceed $25 billion by 2030. With a young, digitally native workforce, India has the potential to become a global hub for creative services. The Indian Institute of Creative Skills (IICS) is a pivotal initiative that aligns with our vision of transforming raw talent into future-ready professionals through industry-integrated training. By bridging the skill gap and fostering innovation, we are not only unlocking new job opportunities but also reinforcing India’s position as a leader in the global creative economy.",
          },
          {
            link: "/fees&studentSupport",
            title: "Shri Ved Mani Tiwari",
            subHead:'Message from CEO, NSDC & Managing Director, NSDC International (NSDCI) ',
            mentorMessage:
              "Skilling is the cornerstone of societal progress, and fostering world-class institutes is essential to equip individuals with the capabilities needed to thrive in a dynamic Global economy. The Indian Institute of Creative Skills (IICS) is a visionary initiative that places creativity at the heart of skill development, nurturing talent that not only meets professional standards but also pioneers new possibilities. At IICS, the focus is on empowering individuals to become creative entrepreneurs, shaping Industries and driving innovation rather than merely joining the workforce. NSDC is proud to champion this initiative, providing unwavering support to build a world of boundless opportunities and a thriving creative ecosystem.",
          },
          // { link: "/leaders", title: "Our Guiding Force" },
          { link: "/management", title: "Management" },
          { link: "/stakeHolders", title: "Stake Holders" },
        ],
      },

      {
        inner_menu: true,
        title: "Mentors",
        inner_menus: [
          {
            link: "/chiefMentors",
            title: "Chief Mentors",
            studentsSeat: "",
          },
          {
            link: "/mentors",
            title: "Mentors",
            studentsSeat: "",
          },
          //   {
          // 	  link: "/internationalMentors", title: "International Mentors",
          // 	  studentsSeat: ""
          //   },
        ],
      },

      { link: "/partners", title: "Partners" },
      { link: "/hiring", title: "Hiring" },
      { link: "/campus", title: "Campuses" },

      // { link: "#", demo_img: demo_img_6, title2: "Coming Soon" },
      // { link: "#", demo_img: demo_img_6, title2: "Coming Soon" },
      // { link: "#", demo_img: demo_img_6, title2: "Coming Soon" },
    ],
  },
  {
    id: 2,
    title: "ADMISSION",
    link: "#",
    icon: "fas fa-book",
    has_dropdown: true,
    has_dropdown_inner: true,
    sub_menus: [
      {
        link: "/entranceProcess",
        title: "Entrance Process",
        inner_menu: true,
        inner_menus: [
          { link: "/how-to-apply", title: "How To Apply" },
          { link: "/eligibilityCriteria", title: "Eligibility Criteria" },
          { link: "/fees&studentSupport", title: "Fees & Support" },
          { link: "/samplePaper", title: "Sample Papers" },
        ],
      },
      { link: "/publicNotes", title: "Public Notice " },

      { link: "/prospectus", title: "Prospectus" },

      { link: "/faq", title: "FAQs" },
    ],
  },
  {
    id: 3,
    title: "PROGRAMS",
    link: "#",
    icon: "fas fa-gift",
    has_dropdown: true,
    sub_menus: [
		{
            link: "/courses-details",
            title: "Performing Arts and Media Management",
            mentorName: "Dr. (Hon) Amit Behl",
            mentorIcon: "/assets/iics_image/leaders/amit_behl.webp",
            mentorAbout:"Dr. Amit Behl is an Indian theatre, television and film actor. Amit Behl began his career in 1994 with a role in India's first daily soap opera Shanti. He later went on to do almost 100 TV serials in Hindi, English, Marathi, Punjabi and Urdu. He was the Hon’ble General secretary been the senior joint secretary of CINTAA (Cine & TV artistes association) from 2015 till 2024. He is a member of the governing council of MESC (Media & Entertainment skill council), advising NSDC to integrate and recognise skills in the media and entertainment industry. He is a visiting faculty at various media and management schools, including We School Mumbai, MET, DY Patil University etc.",
            courseImg:
              "/assets/iics_course_image/performing-arts-media-management.webp",
courseOverview:"This two-year production-oriented performing arts course is meticulously designed to equip students with the essential skills, specialized knowledge, and practical experience necessary to excel in the competitive fields of theatre, film, television, and digital media. Through a blend of intensive training, creative projects, and professional development, graduates will be well-prepared to pursue successful and fulfilling careers in the performing arts industry The course consists of a 21-month intensive training module followed by a three-month project focused on creating video and theatrical performances.",
            mentorInfo:
              "Award-Winning Film, Television, Theatre Actor, Professor of Media & Entertainment, Creative Producer & Senior Consultant",
              
            duration: "2 Years (12+6+6 Months)",
            courseType: "Certificate",
            fees: "6 Lakhs Per Annum",
            registrationStart: '28th April 2025',
            registrationEnd: '12th May 2025',
            onlineEntranceExam: '16th to 18th May 2025',
            batchLaunchDate: '12th June 2025',
            courseInfo:
              "Acting, production, and media strategy in one integrated course.",
            studentsSeat: "20",
            enrollmentDeadLine: "15.04.2025",
            courseStartDate: "15.05.2025",
            industryMentors: ["Mr. Dimpy Mishra", "Mr. Ashish Tatla"],
            careerJob:
              "Actor, Theatre Artist, Media Manager, Casting Associate, Assistant Director, Talent Manager",
            careerEntrepreneurship:
              "Founder of Theatre Group, Independent Creative Producer, Talent Management Agency Owner",
            eligibilityCriteria:
              ["12th Pass from a recognized Board with an interest in performing arts and media management", 'Open to all, aspiring actors, theatre enthusiasts, media professionals, and graduates from related fields.'],
			 imagesArr : Array.from({ length: 14 }, (_, i) => 
				`/assets/iics_image/perform_art/perform_art_${i + 1}.webp`
			  ),
            courseCurricullam: [
              {
                title: "Semester 1",
                content: [
                  "Acting Fundamentals",
                  "Introduction to Media and Communication",
                  "Acting for Camera and Stage",
                  "Workshop: Anchoring and Presentation Skills",
                ],
              },
              {
                title: "Semester 2",
                content: [
                  "Advanced Acting Techniques",
                  "Theatre Arts",
                  "Acting for Television and Film",
                  "Content Creation Basics",
                  "Workshop: Public Speaking and Media Relations",
                ],
              },
              {
                title: "Semester 3",
                content: [
                  "Acting for Diverse Genres",
                  "Content and Media Management",
                  "Media Production Techniques",
                  "Theatre Production and Direction",
                  "Workshop: Improvisation and live Performances",
                ],
              },
              {
                title: "Semester 4",
                content: [
                  "Media Entrepreneurship",
                  "Industry Networking and Career Preparation",
                  "Capstone Project",
                  "Internship and Industry Exposure",
                ],
              },
            ],
          },
          {
            link: "/courses-details",
            title: "Hair, Makeup & Prosthetics",
            mentorName: "Ms. Yasmin Rodgers",
            duration: "1 Year (6+3+3 Months)",
            courseType: "Certificate",
            fees: "6 Lakhs Per Annum",
            registrationStart: '28th April 2025',
            registrationEnd: '12th May 2025',
            onlineEntranceExam: '16th to 18th May 2025',
            batchLaunchDate: '12th June 2025',
            courseImg: "/assets/iics_course_image/hair-makeup-prosthetics.webp",
            courseInfo:
              "Makeup Artistry, Special Effects, Prosthetic design all integrated over a one-year program.",
            studentsSeat: "15",
            courseOverview:"Explore makeup artistry and prosthetic design over a one-year program. This one-year course at IICS is designed for those interested in learning beauty makeup, special effects, and prosthetics for film, theater, and fashion. The first semester covers hair styling, makeup fundamentals, and basic special effects, while the second semester specializes in prosthetics, including life casting, mold making, sculpting, and advanced special effects makeup.",
            enrollmentDeadLine: "15.04.2025",
            courseStartDate: "19.05.2025",
            industryMentors: ["Mr. Harry"],
            mentorIcon: "/assets/iics_image/leaders/yasmin_rodgers.webp",
            mentorInfo: "Celebrity Makeup & Prosthetics Artist",
            mentorAbout:"Ms. Yasmin Rodgers is a seasoned makeup, hair, and prosthetic artist with over 30 years of experience in the Bollywood, Tollywood and Hollywood film industries. Renowned for her expertise in transforming actors with her intricate designs, she has contributed to the creation of unforgettable looks in numerous high-profile films and projects, including Tenet,Eat pray love, Mission impossible, Fukrey, Article 15, Pagglait, Gyaarah Gyaarah, Kathal, Viceroy’s house and Bombay begums. Her ability to blend artistic vision with technical skill has made her a sought-after collaborator among directors, producers, and actors worldwide. She has worked with actors like Richard Gere, Julia Roberts, Amitabh Bachchan, Adrian Brody, Akshay Kumar, Tiger Shroff, Shabana Azmi, Kriti Sanon, Kiefer Sutherland, Jugal Hansraj, and Ali Fazal. Beyond her impressive body of work, Yasmin has dedicated much of her career to training and mentoring the next generation of artists, sharing her extensive knowledge and techniques with aspiring makeup, hair, and prosthetic specialists.",
            careerJob:
              "Makeup Artist, Hair Stylist, Prosthetic Designer, Film/TV Stylist",
            careerEntrepreneurship:
              "Freelance Makeup Studio, Beauty Brand Founder, Bridal & Film Makeup Studio",
            eligibilityCriteria:
              ['12th Pass from a recognized Board with an interest in makeup, hairstyling, and prosthetics.' , "Open to makeup artists, hairstylists, fashion professionals, beauty influencers, and graduates from related disciplines. "],
			  imagesArr : Array.from({ length: 9 }, (_, i) => 
				`/assets/iics_image/hair_art/hair_art_${i + 1}.webp`
			  ),
            courseCurricullam: [
              {
                title: "Semester 1",
                content: ["Beauty & Bridal Makeup Fundamentals"],
              },
            ],
          },

		  {
            link: "/courses-details",
            title: "Sound Recording and Sound Design",

            mentorName: "Padma Shri Dr. Resul Pookutty",
            duration: "2 Year (12+6+6 Months)",
            courseType: "Certificate",
            fees: "6 Lakhs Per Annum",
            registrationStart: '20th May 2025',
            registrationEnd: '15th June 2025',
            onlineEntranceExam: '19th to 21st June 2025',
            batchLaunchDate: '16th July 2025',
            courseInfo: "Sound Recording and Sound Design",
            studentsSeat: "20",
            enrollmentDeadLine: "20.04.2025",
            courseStartDate: "19.05.2025",
            courseOverview:"The Sound Production course is a two-year program covering sound recording, editing, and design, with hands-on training using industry-standard equipment and software equipping students with the skills needed for sound editing, mixing, and mastering. . The first semester covers sound recording techniques, sound editing, and music production, while the second semester focuses on advanced recording techniques, sound editing and mixing, and post-production sound. Students can specialize in film and television sound production, music production, or game audio design.", 
            courseVideo: "/assets/iics_video/course_video/sound_school.mp4",
            courseImg:
              "/assets/iics_course_image/sound-recording-sound-design.webp",
            industryMentors: [],
            mentorIcon: "/assets/iics_image/leaders/rasul.webp",
            mentorInfo: "Academy Award Winner, Indian Sound Designer ",
            mentorAbout:"Padma Shri Dr. Resul Pookutty (born 30 May 1971) is an Indian film sound designer, sound editor and audio mixer. He won the Academy Award for Best Sound Mixing, along with Richard Pryke and Ian Tapp, for Slumdog Millionaire. Resul Pookutty has worked in Hindi, Tamil, Telugu, Marathi and Malayalam languages in addition to British films. Resul Pookutty is a Governing Council Member of Media Entertainment Skills Council, working towards making India the Skill Capital of the World and promoting Vidyadaan, a new initiative by Mr. Subhash Ghai, Chairman, MESC to help share knowledge to the less privileged in the society.",
            careerJob:
              "Sound Designer, Sound Editor, Audio Engineer, Foley Artist, Mixing/Mastering Engineer",
            careerEntrepreneurship:
              "Home Studio Business, Independent Sound Post-Production Services, Podcast & Music Production Studio Owner",
            eligibilityCriteria:
              ['12th Pass from a recognized Board with an interest in sound engineering and design.',  "Open to B.Tech, B.Sc. graduates in Sound Engineering or related disciplines, music producers, audio technicians, and professionals in the music and film industry." , 'Students with Science.'],
              imagesArr : Array.from({ length: 13 }, (_, i) => 
                `/assets/iics_image/sound_images/sound_${i + 1}.webp`
                ),
            courseCurricullam: [
              {
                title: "Semester 1: Introduction to Cinema and Filmmaking",
                content: [
                  "Introduction to Cinema",
                  "Introduction to Filmmaking",
                  "Introduction to different departments of Cinema (Direction, Camera, Sound and Edit)",
                ],
              },
              {
                title:
                  "Semester 2: Sound Recording, Sound Designing and Sound Editing",
                content: [
                  "Introduction to Sound Recording and Sound Designing",
                  "Sound Recording and Sound Editing",
                  "Project (Dialogue Film)",
                ],
              },
              {
                title:
                  "Semester 3: Sound Mixing, Mastering and Playback Project",
                content: ["Sound Mixing", "Mastering", "Playback Project"],
              },
              {
                title:
                  "Semester 4:  Sound Design, Sound Production and Film Project",
                content: [
                  "Sound Design (Aesthetics, Spirituality and Technology)",
                  "Different formats of Sound Production",
                  "Graduation Portfolio",
                  "Internship and Industry Exposure",
                ],
              },
            ],
          },

		  {
            link: "/courses-details",
            title: "3D Game Art",
            mentorName: "Mr. Manvendra Shukul",
            duration: "2 Year (12+6+6 Months)",
            courseType: "Certificate",
            fees: "6 Lakhs Per Annum",
            registrationStart: '20th June 2025',
            registrationEnd: '10th July 2025',
            onlineEntranceExam: '17th to 19th July 2025',
            batchLaunchDate: '12th August 2025',
            courseInfo: "3D Game Art",
            studentsSeat: "25",
            courseOverview:"This 2-year program equips students with foundational and advanced skills in game art production, combining 18 months of intensive teaching with a 6-month industry internship. The curriculum starts with core art and 3D tools, progressing to character and environment creation, sculpting, and integration using Unreal and Unity. The 3rd semester emphasizes specialization, team projects, and professional portfolio development, ensuring students are industry-ready and gain practical experience during their internship.",
            enrollmentDeadLine: "19.04.2025",
            courseStartDate: "15.05.2025",
            courseImg: "/assets/iics_course_image/3d-game-art.webp",
            industryMentors: [],
            mentorIcon: "/assets/iics_image/leaders/manvendar_shukul.webp",
            mentorInfo: "CEO, Lakshya Digital",
            mentorAbout:"Mr. Manvendra Shukul is a prominent figure in the Indian gaming and animation industry. He is the CEO of Lakshya Digital, a leading game development company that was acquired by Keywords Studios in 2014. With over 25 years of experience, Shukul has played a crucial role in establishing India's presence in the global gaming and animation sectors. He is also a co-founder of the NASSCOM Gaming Forum and IGDC, and actively involved with GDAI and MESC. Additionally, he served as a BAFTA Breakthrough India 2023 jury member.",
            careerJob:
              "3D Artist, Game Designer, Environment Artist, Character Modeler",
            careerEntrepreneurship:
              "Indie Game Studio Founder, Freelance 3D Modeling Services, VR/AR Asset Design Services",
            eligibilityCriteria:
             ['12th Pass from a recognized Board with an interest in 3D modeling and game design.', "Open to B.Sc., BFA, B.Tech graduates in Animation, Game Art, or related fields, digital artists, gaming professionals, and designers looking to enhance their 3D skills."],
			  imagesArr : Array.from({ length: 8 }, (_, i) => 
				`/assets/iics_image/3d_art/3d_game_${i + 1}.webp`
			  ),
            courseCurricullam: [
              {
                title: "Semester 1",
                content: [
                  "Intro and Fundamentals",
                  "Base of Art Skills",
                  "Game Art Pipeline and Production",
                ],
              },
              {
                title: "Semester 2",
                content: [
                  "Transition to Intermediate Level",
                  "Interest Mapping and Teamwork",
                ],
              },
              {
                title: "Semester 3",
                content: ["Specialization Focus", "Portfolio Creation"],
              },
              {
                title: "Semester 4",
                content: ["Internship/Apprenticeship"],
              },
            ],
          },
          {
            link: "/courses-details",
            title: "Advance Gaming and Extended Reality (XR) Innovations",
            mentorName: "Mr. Anand Jha",
            duration: "2 Year (12+6+6 Months)",
            courseType: "Certificate",
            fees: "6 Lakhs Per Annum",
            registrationStart: '28th April 2025',
            registrationEnd: '12th May 2025',
            onlineEntranceExam: '16th to 18th May 2025',
            batchLaunchDate: '12th June 2025',
            courseOverview:"This 2-year A-Certification course in Video Games and XR (Extended Reality) provides an in-depth understanding of game design, development, and immersive technologies. The course is designed to prepare students for the dynamic and growing fields of game development and XR by teaching them the technical and creative skills needed to build engaging, interactive, and immersive experiences. Through hands-on learning with industry-standard tools like Unity and Unreal Engine, students will gain proficiency in game programming, art, level design, and XR development. The course also covers essential topics such as multiplayer game design, game monetization, and launch strategies.",
            courseInfo: "Advance Gaming and Extended Reality (XR) Innovations",
            studentsSeat: "25",
            enrollmentDeadLine: "19.04.2025",
            courseStartDate: "20.05.2025",
            courseImg:
              "/assets/iics_course_image/advance-gaming-extended-reality-innovations.webp",
            industryMentors: [],
            mentorIcon: "/assets/iics_image/leaders/anand_jha.webp",
            mentorInfo: "CEO, Nilee Games",
            mentorAbout:"Mr. Anand Jha is a visionary entrepreneur and seasoned professional with over 19 years in the Animation, Visual Effects, Gaming, and Comics (AVGC) sector. As the Founder and CEO of Nilee Games and Future Technologies Pvt. Ltd., Anand has driven the company’s transformation from a service-based game development studio into a leader in original IP creation, expanding into Gaming, AR, VR, Animated series, Metaverse, Artificial Intelligence, and interactive entertainment. His accomplishments earned him a spot in Forbes India’s Select 200 in Nov 2024, a recognition highlighting influential leaders shaping India's business landscape.",
            careerJob:
              "Game Developer, XR Developer, Simulation Designer, AR/VR Project Coordinator",
            careerEntrepreneurship:
              "XR Startup Founder, Metaverse Design Studio, Training Simulation Company Owner",
              eligibilityCriteria: [
                "12th Pass from a recognized Board with an interest in 3D modeling and game design.",
                "Open to B.Tech, B.Sc., BCA graduates in Game Development, XR, or related fields, AR/VR developers, designers, and gaming professionals."
              ],
            courseCurricullam: [
              {
                title:
                  "Semester 1: Game Development with Unity and Unreal Engine",
                content: [
                  "Introduction to Game Design",
                  "Introduction of AI in Game Development",
                  "Unreal Engine and Unity3D Basics",
                  "Level Design",
                  "Scripting Fundamentals",
                  "Game Art and Assets",
                ],
              },
              {
                title:
                  "Semester 2: Advanced Game Development and Extended Reality (XR)",
                content: [
                  "Advanced Techniques",
                  "Advanced Programming",
                  "Character Design and Animation",

                  "Multiplayer Game Design",
                  "Game Testing and QA",
                  "Game Monetization and Launching Platforms",
                ],
              },
              {
                title: "Semester 3",
                content: ["Projects", "Specialization"],
              },
              {
                title: "Semester 4",
                content: ["Apprenticeship/Internship at Studio"],
              },
            ],
          },

		  {
            link: "/courses-details",
            title:
              "Journalism, PR, Image Strategization & Brand Custodianship Program",
            mentorName: "Dr. (Hon) Anusha Srinivasan Iyer",
            mentorTwoName:'Dr. (Hon) S Ramachandran',
            mentorTwoInfo:'Journalist, Filmmaker, Brand Strategist, Author, Theatrician',
            mentorTwoAbout:"Dr. ( Hon) S Ramachandran is a celebrated journalist, author, brand strategist, and filmmaker with over three decades of experience in print, television, and digital media. A prolific writer, he has authored thought-provoking books that delve into contemporary issues, offering unique perspectives that resonate with readers. His journalism career is marked by incisive storytelling and impactful narratives that have shaped public opinion and established him as a trusted voice in the industry also having worked in organisations like NDTV, Indian Express and Mid-day among others. In addition to his literary and journalistic accomplishments, Ramachandran is a renowned brand strategist who has successfully elevated the public personas of celebrities, corporates, and political figures. His innovative approach to image-building, combined with his deep understanding of human psychology, makes him a sought-after mentor and thought leader in the fields of media and public relations.",
            mentorTwoIcon:"/assets/iics_image/leaders/ramachandran.webp",
            duration: "2 Year (12+6+6 Months)",
            courseType: "Certificate",
            fees: "6 Lakhs Per Annum",
            registrationStart: '28th April 2025',
            registrationEnd: '12th May 2025',
            onlineEntranceExam: '16th to 18th May 2025',
            batchLaunchDate: '12th June 2025',
            courseInfo:
              "Journalism, PR, Image Strategization & Brand Custodianship all integrated over a one-year program.",
            studentsSeat: "20",
            enrollmentDeadLine: "19.04.2025",
            courseStartDate: "20.05.2025",
            courseImg:
              "/assets/iics_course_image/journalism-PR-Image-strategization-Brand-Custodianship.webp",
            industryMentors: [],
            mentorIcon:
              "/assets/iics_image/leaders/anusha.webp",
            mentorInfo:
              "Brand Custodian, Image Strategist, International Award- Winning Writer- Director, Firebrand Journalist, Egalitarian Activist",
              courseOverview:"This one year professional certification program offers comprehensive training in digital marketing, social media content creation, influencing, and podcasting. Designed for aspiring digital marketers, content creators, influencers, and podcasters, the course equips students with cutting-edge skills to excel in the digital landscape. From mastering SEO, PR, content marketing, and paid advertising to leveraging social media for growth and podcast production, students will gain practical, hands-on experience in all aspects of digital marketing and content development. The program combines foundational marketing concepts with advanced techniques for building an online presence, creating engaging content, and monetizing digital platforms. By the end of the course, students will have developed a professional digital portfolio, including a successful podcast and social media profiles, positioning them to launch and scale their careers as digital marketers or influencers.",
              mentorAbout:"Dr. (Hon) Anusha Srinivasan Iyer is a firebrand journalist, philanthropist, and one of India's most influential image strategists. With over three decades of experience, she has transformed Naarad PR & Image Strategists into a powerhouse that has served iconic corporates, celebrities, and global initiatives. Known for her razor-sharp storytelling and innovative branding techniques, she was recognized among India's 111 most powerful women by former President Dr. APJ Abdul Kalam. Anusha is also a global award-winning filmmaker and founder of social impact organizations like Make Earth Green Again Mega Foundation, Pawsitive Farm Sanctuary and Zindagi Helpline, reflecting her deep commitment to environmental conservation and community upliftment. As a disruptor in the PR industry, Anusha combines journalism and strategic insights to craft compelling narratives that have redefined public relations in India. Her expertise spans diverse sectors, including entertainment, art, culture, and politics. A global thought leader, she is also an Egalitarian Earth warrior and educationist who continues to inspire and mentor through her initiatives.",
            careerJob:
              "Journalist, PR Executive, Image Consultant, Brand Strategist, Content Editor",
            careerEntrepreneurship:
              "Media Consulting Firm, PR Agency Founder, Branding & Digital Reputation Agency",
            eligibilityCriteria:
             [ "12th Pass from a recognized Board with an interest in journalism, public relations, and brand communication.", "Open to Mass Communication, BBA, and MBA graduates, PR professionals, journalists, media strategists, and corporate communication executives."],
            courseCurricullam: [
              {
                title: "Semester 1: Foundations of Media and Communication",
                content: [
                  "Fundamentals of Communication",
                  "Journalism Fundamentals",
                  "Introduction to Public Relations",
                  "Introduction to Social Media",
                ],
              },
              {
                title: "Semester 2: Digital Media and Social Media Marketing",
                content: [
                  "Digital Media Marketing",
                  "Social Media Strategy and Management",
                  "Digital Storytelling",

                  "Public Relations in the Digital Age",
                  "Introduction to Artificial Intelligence in Media",
                  "Social Media Analytics and Measurement",
                  "Social Media for Business",
                ],
              },
              {
                title: "Semester 3: Specialization Track",
                content: [
                  "Journalism and Media (Option 1)",
                  "Public Relations and Corporate Communication (Option 2)",
                  "Digital Marketing and Social Media (Option 3)",
                  "Internship (I)",
                  "Elective-Introduction to Film Studies (Performing Art Department)",
                ],
              },
              {
                title: "Semester 4: Advanced Studies and Internship (II)",
                content: [
                  "Advanced Topics in Specialization",
                  "AI in Media and Communication",
                  "Social Media Influencers",
                  "Internship (II)",
                ],
              },
            ],
          },

      {
        link: "/event-details",
        title: "Events And Experiential Media",
        mentorName: "Ms. Sushma Gaikwad",
        duration: "2 Year (12+6+6 Months)",
        courseType: "Certificate",
        fees: "6 Lakhs Per Annum",
        registrationStart: '20th May 2025',
        registrationEnd: '15th June 2025',
        onlineEntranceExam: '19th to 21st June 2025',
        batchLaunchDate: '16th July 2025',
        courseInfo: "Events and Experiential Management Program",
        studentsSeat: "20",
        enrollmentDeadLine: "20.04.2025",
        courseStartDate: "19.05.2025",
        courseVideo:
          "https://res.cloudinary.com/dwgwz52rq/video/upload/v1744687414/events_xbzrld.mp4",
        courseImg:
          "/assets/iics_course_image/event-experiential-management-program.webp",
          courseOverview:"The Certificate in Events and Experiential Management Program at IICS is designed to equip students with the skills needed to plan, organize, and execute various events, from corporate conferences to weddings and festivals. This two-year program combines theoretical knowledge with practical skills, covering event planning, coordination, logistics, budgeting, marketing, and client management, preparing students for diverse event management roles. This course also focuses on advanced skills in crafting impactful communication strategies, managing public relations, and building strong brand identities. With an emphasis on practical exposure, students will engage in workshops, masterclasses, and real-world projects to become adept in handling high-end PR campaigns and communication challenges.",
        industryMentors: [],
        mentorIcon: "/assets/iics_image/leaders/susma.webp",
        mentorInfo: "Academy Award Winner, Indian Sound Designer ",
        mentorAbout:"Ms. Sushma Gaikwad is a media entrepreneur, a communication specialist, Motivational and Tedex Speaker, a breakthrough therapist, and a Dale Carnegie certified trainer and NLP Master Practitioner. Sushma commenced her professional journey alongside her education in the Luxury industry and then joined the media industry as an experiential specialist at a time when the industry was very nascent. As one of the first few women in the media and entertainment domain, she worked with one of the top event agencies for over half a decade and was working with the pioneers in business. In the year 1997, Sushma was drawn into the arena of Corporate Identity and specialized in Corporate Identity Implementation Processes with Sista’s and Wolf-Olin’s in the UK. She was a part of the core team that designed and implemented the corporate identity of the TATA brand.",
        careerJob:
          "Sound Designer, Sound Editor, Audio Engineer, Foley Artist, Mixing/Mastering Engineer",
        careerEntrepreneurship:
          "Home Studio Business, Independent Sound Post-Production Services, Podcast & Music Production Studio Owner",
        eligibilityCriteria:
          ["12th Pass from a recognized Board with an interest in event planning and experiential marketing." , "Open to B.Tech, B.Sc. graduates in Sound Engineering or related disciplines, music producers, audio technicians, and professionals in the music and film industry."],
        courseCurricullam: [
          {
            title: "Semester 1: Fundamentals of Event Management",
            content: [
              "Overview of Experiential & Event Management",
              "Understanding the Science Behind Experiential Management",
              "Understanding the Functioning of Experiential Management",
              "Types of Events",
              "Event Planning",
            ],
          },
          {
            title:
              "Semester 2: Sound Recording, Sound Designing and Sound Editing",
            content: [
              "Introduction to Sound Recording and Sound Designing",
              "Sound Recording and Sound Editing",
              "Project (Dialogue Film)",
            ],
          },
          {
            title: "Semester 3: Sound Mixing, Mastering and Playback Project",
            content: ["Sound Mixing", "Mastering", "Playback Project"],
          },
          {
            title:
              "Semester 4:  Sound Design, Sound Production and Film Project",
            content: [
              "Sound Design (Aesthetics, Spirituality and Technology)",
              "Different formats of Sound Production",
              "Graduation Portfolio",
              "Internship and Industry Exposure",
            ],
          },
        ],
      },

      {
        link: "/event-details",
        title: "Digital Content Creation",
        mentorName: "Ms. Ketki Pandit",
        mentorAbout:"Ketki Pandit Mehta is a visionary filmmaker, entrepreneur, and youth advocate redefining storytelling and education. She has worked with Anand Pandit Motion Pictures on acclaimed films such as Chehre, Sarkar 3, Bazar, and Pyaar Ka Punchnama 2. Her global collaborations include leading film studios and producing award-winning projects like The Shameless, recognized at Cannes and Palm Springs. Ketki’s contributions also extend to social impact projects, including the film Maharashtra for the India Police Foundation, and celebrity-driven campaigns. With a relentless focus on youth empowerment, she is building a future where creativity drives meaningful change.",
        duration: "2 Year (12+6+6 Months)",
        courseType: "Certificate",
        fees: "6 Lakhs Per Annum",
        registrationStart: '28th April 2025',
        registrationEnd: '12th May 2025',
        onlineEntranceExam: '16th to 18th May 2025',
        batchLaunchDate: '12th June 2025',
        courseInfo: "Events and Experiential Management Program",
        studentsSeat: "20",
        enrollmentDeadLine: "20.04.2025",
        courseStartDate: "19.05.2025",
        courseOverview:"The Certificate in Digital Management and Content Creation is not just a course but a revolution in content creation. This 2 years program is where storytelling meets intelligence, AI fuels innovation, and digital strategy drives impact. Designed for modern entrepreneurs, creators, and brand disruptors, it equips you with the tools to dominate the evolving digital landscape.",
        courseImg:
          "/assets/iics_course_image/digital-management-content-creation.webp",
        industryMentors: [],
        mentorIcon: "/assets/iics_image/leaders/ketki_pandit.webp",
        mentorInfo: "Academy Award Winner, Indian Sound Designer ",

        careerJob:
          "Sound Designer, Sound Editor, Audio Engineer, Foley Artist, Mixing/Mastering Engineer",
        careerEntrepreneurship:
          "Home Studio Business, Independent Sound Post-Production Services, Podcast & Music Production Studio Owner",
        eligibilityCriteria:
          ["12th Pass from a recognized Board with an interest in digital media, content creation, and online branding." , "Open to B.Tech, B.Sc. graduates in Sound Engineering or related disciplines, music producers, audio technicians, and professionals in the music and film industry."],
        courseCurricullam: [
          {
            title:
              "Semester 1: Digital Content Mastery: Building the Foundation",
            content: [
              "Foundations of Content Creation",
              "Communication & Design",
              "Visual Content Creation",
              "Customer Journey & Engagement",
              "Digital Analytics & Measurement",
              "Social Media Marketing (A)",
            ],
          },
          {
            title: "Semester 2: Advanced Media Strategies & AI Integration",
            content: [
              "Audio Influence & Podcast Mastery",
              "Video Creation & AI Integration",
              "AR/VR, Blogging & Web Optimization",
              "Measuring Content Performance",
              "Creative Studio with AI Integration",
              "Specialization & Major Project",
            ],
          },
          {
            title: "Semester 3: 6 Months Internship",
            content: [
              "Potential Internship Opportunities",
              "Media Houses",
              "Film Studios",
              "Digital Platforms",
              "Advertising Agencies",
            ],
          },
          {
            title: "Semester 4: 6 Months Apprenticeship",
            content: [
              "Execute a full-scale content project under expert mentorship",
              "Develop high-level content strategy & leadership skills",
              "Build an industry-ready portfolio",
              // 'Internship and Industry Exposure'
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "LIFE @ IICS",
    link: "#",
    icon: "fas fa-shopping-bag",
    has_dropdown: true,
    sub_menus: [
      { link: "/gallery", title: "Gallery" },
      {
        inner_menu: false,
        title: "Events & Workshop",
        link: "/event",
        inner_menus: [
          {
            link: "/delhi-creators-summit",
            title: "Delhi Creator’s Summit",
          },
          {
            link: "/delhi-creative-artists-summit",
            title: "Delhi Creative Artists Summit",
          },

          {
            link: "/gujarat-creative-artists-summit",
            title: "Gujarat Creative Artists Summit",
          },
        ],
      },
      { link: "/press-media", title: "Press Media" },
      // { link: "/workshop", title: "Workshops" },
      { link: "/infrastructure", title: "Infrastructure" },
      { link: "/careers", title: "Careers" },
      { link: "/accommodation", title: "Accommodation" },
    ],
  },
  {
    id: 5,
    title: "CREATIVE INCUBATOR",
    link: "#",
    icon: "fas fa-file-alt",
    has_dropdown: true,
    has_dropdown_inner: true,
    sub_menus: [
      { link: "/live-projects", title: "Live Projects" },
      { link: "/apprenticeship", title: "Apprenticeship" },
      { link: "/startup-support", title: "Startup Support" },
      { link: "/portfolio-development", title: "Portfolio Development" },
      { link: "/industry-association", title: "Industry Association" },
      {
        link: "/source-funding-ip-creation",
        title: "Source Funding & IP Creation",
      },
      { link: "/podcast", title: "Podcast" },
    ],
  },
  {
    id: 6,
    title: "CONTACT US",
    link: "/contact",
    icon: "fas fa-phone-rotary",
    has_dropdown: false,
  },
];
export default menu_data;
